"use client";
import { FormEvent, useRef, useState } from "react";
import { Search } from "lucide-react";
import { additivesData } from "@/assets/additives";
import { useModalContext } from "@/app/ui/components/Modal";
import toast from "react-hot-toast";

const AdditivesSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { setOpenName } = useModalContext();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value) return;
    setIsPending(true);
    const loadingToast = toast.loading(
      "Recherche de l'additif. Veuillez patienter..."
    );
    const value = inputRef.current.value.toLowerCase();
    const additive = await Promise.resolve(
      additivesData.find(
        (item) =>
          item.e_number.toLowerCase() === value ||
          item.name.toLowerCase() === value
      )
    );
    toast.dismiss(loadingToast);
    setIsPending(false);
    if (additive) {
      setOpenName(additive.e_number);
    } else {
      toast.error("Aucun additif correspodant.");
    }
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSearch} className="inline-flex flex-col max-w-md">
      <div className="flex items-center px-4 py-3">
        <div className="relative flex flex-col">
          <input
            ref={inputRef}
            id="search"
            type="search"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-brand-600 bg-transparent border-0 border-b border-brand-600 appearance-none focus:outline-none focus:ring-0 focus:border-brand-400 peer"
            disabled={isPending}
          />
          <label
            htmlFor="search"
            className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-left peer-focus:start-0 text-brand-600/90 peer-focus:text-brand-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Rechercher un additif
          </label>
        </div>
        <button
          type="submit"
          className="cursor-pointer"
          disabled={isPending}
          aria-label="Rechercher un additif"
        >
          {isPending ? (
            <>
              <span className="size-4 inline-block rounded-full animate-spin border-[1.5px] border-brand-600 border-b-transparent"></span>{" "}
            </>
          ) : (
            <>
              <Search className="text-brand-600 size-5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
      <small className="text-xs italic font-extralight">
        Saisissez le E-number ou le nom d&apos;un additif.
      </small>
    </form>
  );
};

export default AdditivesSearch;

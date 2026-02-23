"use client";
import { FormEvent, useRef, useState } from "react";
import { AdditiveDataType } from "@/types/definitions";

import { Search } from "lucide-react";
import { useModalContext } from "@/app/ui/components/Modal";
import Modal from "@/app/ui/components/Modal";

interface AdditivesListProps {
  data: AdditiveDataType[];
}

const AdditivesSearch = ({ data }: AdditivesListProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const { setOpenName } = useModalContext();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value) return;
    setIsPending(true);
    const value = inputRef.current.value.toLowerCase();
    const additive = await Promise.resolve(
      data.find(
        (item) =>
          item.e_number.toLowerCase() === value ||
          item.name.toLowerCase() === value,
      ),
    );
    setIsPending(false);
    setOpenName(additive?.e_number ?? "additive-not-found");
    inputRef.current.value = "";
  };

  return (
    <section>
      <Modal.Window name="additive-not-found">
        <div>
          <h3 className={`px-4 py-2 font-semibold text-brand-900`}>
            Aucun additif correspondant
          </h3>
          <p className="px-4 py-2 leading-relaxed">
            Désolé, nous n&apos;avons pas trouvé l&apos;additif correspondant à
            votre recherche. Vérifiez l&apos;orthographe ou contactez-nous si
            vous pensez qu&apos;il s&apos;agit d&apos;une erreur.
          </p>
        </div>
      </Modal.Window>
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
    </section>
  );
};

export default AdditivesSearch;

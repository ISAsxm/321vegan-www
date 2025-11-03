"use client";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { contactMeAction } from "@/app/lib/actions";
import type { ContactFormData } from "@/types/definitions";
import { ArrowRight } from "lucide-react";
import Altcha from "@/app/ui/contact/Altcha";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const altchaRef = useRef<HTMLInputElement | null>(null);
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  async function onSubmit(data: ContactFormData) {
    setIsPending(true);
    const loadingToast = toast.loading(
      "Envoi du message. Veuillez patienter..."
    );
    const res = await contactMeAction(captcha, data);
    toast.dismiss(loadingToast);
    setIsPending(false);
    if (res.success) {
      toast.success("Message envoyé avec succès !");
      reset();
    } else {
      console.log("Error", res);
      toast.error(
        "Une erreur est survenue. Veuillez réessayer ultérieurement."
      );
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative flex flex-col">
          <input
            id="first_name"
            type="text"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-brand-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-100 peer"
            aria-describedby="first_name-error"
            disabled={isPending}
            {...register("first_name", {
              required: "Ce champ est obligatoire.",
              maxLength: 80,
            })}
          />
          <label
            htmlFor="first_name"
            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-left peer-focus:start-0 peer-focus:text-brand-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto after:content-['*'] after:ml-0.5 after:text-red-200"
          >
            Prénom
          </label>
          <div id="first_name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-200">
              {errors?.first_name?.message}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col">
          <input
            id="last_name"
            type="text"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-brand-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-100 peer"
            aria-describedby="last_name-error"
            disabled={isPending}
            {...register("last_name", {
              required: false,
              maxLength: 90,
            })}
          />
          <label
            htmlFor="last_name"
            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-left peer-focus:start-0 peer-focus:text-brand-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Nom
          </label>
          <div id="last_name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-200">
              {errors?.last_name?.message}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col col-span-full">
          <input
            id="email"
            type="email"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-brand-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-100 peer"
            aria-describedby="email-error"
            disabled={isPending}
            {...register("email", {
              required: "Ce champ est obligatoire.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Adresse e-mail invalide",
              },
            })}
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-left peer-focus:start-0 peer-focus:text-brand-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto after:content-['*'] after:ml-0.5 after:text-red-200"
          >
            Email
          </label>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-200">
              {errors?.email?.message}
            </p>
          </div>
        </div>
        <div className="relative flex flex-col col-span-full">
          <textarea
            id="message"
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-brand-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-100 peer"
            aria-describedby="message-error"
            disabled={isPending}
            {...register("message", {
              required: "Ce champ est obligatoire.",
            })}
          ></textarea>
          <label
            htmlFor="message"
            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-left peer-focus:start-0 peer-focus:text-brand-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto after:content-['*'] after:ml-0.5 after:text-red-200"
          >
            Message
          </label>
          <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-200">
              {errors?.message?.message}
            </p>
          </div>
        </div>

        <div
          className="col-span-full"
          role="radiogroup"
          aria-labelledby="subject-group"
        >
          <span
            id="subject-group"
            className="text-sm text-white after:content-['*'] after:ml-0.5 after:text-red-200"
          >
            Sélectionnez un sujet
          </span>
          <div className="flex gap-6 mt-4">
            <div className="flex items-center">
              <input
                id="radio1"
                type="radio"
                value="Demande générale"
                className="hidden peer"
                aria-labelledby="radio1-label"
                aria-describedby="subject-error"
                disabled={isPending}
                {...register("subject", {
                  required: "Ce champ est obligatoire.",
                })}
              />
              <label
                htmlFor="radio1"
                className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-brand-700 w-5 h-5 cursor-pointer border-2 border-brand-300 rounded-full overflow-hidden"
              >
                <span className="border-4 border-brand-300 rounded-full w-full h-full"></span>
              </label>
              <span id="radio1-label" className="text-sm text-white ml-3">
                Demande générale
              </span>
            </div>
            <div className="flex items-center">
              <input
                id="radio2"
                type="radio"
                value="Assistance technique"
                className="hidden peer"
                aria-labelledby="radio2-label"
                aria-describedby="subject-error"
                disabled={isPending}
                {...register("subject", {
                  required: "Ce champ est obligatoire.",
                })}
              />
              <label
                htmlFor="radio2"
                className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-brand-700 w-5 h-5 cursor-pointer border-2 border-brand-300 rounded-full overflow-hidden"
              >
                <span className="border-4 border-brand-300 rounded-full w-full h-full"></span>
              </label>
              <span id="radio2-label" className="text-sm text-white ml-3">
                Assistance technique
              </span>
            </div>
            <div className="flex items-center">
              <input
                id="radio3"
                type="radio"
                value="Partenariat"
                className="hidden peer"
                aria-labelledby="radio3-label"
                aria-describedby="subject-error"
                disabled={isPending}
                {...register("subject", {
                  required: "Ce champ est obligatoire.",
                })}
              />
              <label
                htmlFor="radio3"
                className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-brand-700 w-5 h-5 cursor-pointer border-2 border-brand-300 rounded-full overflow-hidden"
              >
                <span className="border-4 border-brand-300 rounded-full w-full h-full"></span>
              </label>
              <span id="radio3-label" className="text-sm text-white ml-3">
                Partenariat
              </span>
            </div>
          </div>
          <div id="subject-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-200">
              {errors?.subject?.message}
            </p>
          </div>
        </div>

        <div className="col-span-full">
          <Altcha ref={altchaRef} onStateChange={setCaptcha} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-12 flex items-center justify-center gap-2 text-sm font-medium lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide cursor-pointer leading-7 shadow-sm relative z-0 text-white bg-brand-400 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg after:bg-brand-400 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <span className="size-4 inline-block rounded-full animate-spin border-[1.5px] border-brand-300 border-b-transparent"></span>{" "}
            Envoi du message
          </>
        ) : (
          <>
            Envoyer
            <ArrowRight className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

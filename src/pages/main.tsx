"use client";
import { Header } from "../components/header";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
//for form
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}
//for carossel

import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import { PhoneCallIcon } from "lucide-react";

export const Main = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <>
      <div className="md: bg-gradient-to-r  from-cyan-300 to-black  ">
        <Header />
        <main>
          <h2 className="text-subtitles text-white m-5">
            Junior full <br />
            stack Developer
          </h2>

          <div className=" m-5">
            <img src="/img/bg-img.jpg" />
          </div>

          <section>
            <div>
              <h2
                className="text-subtitle text-white m-5"
                id="
              Sobremim"
              >
                Sobre mim
              </h2>
              <p className="text-paraghraph text-white flex justify-center m-5">
                Olá! Sou Maria Génia Abílio Moiane, finalista do curso de
                Engenharia em Tecnologia e Sistemas de Informação, apaixonada
                por inovação e soluções tecnológicas. Tenho um forte interesse
                no desenvolvimento de sistemas inteligentes, com ênfase em
                aprendizado de máquina e visão computacional. Sou entusiasta do
                desenvolvimento de software, tanto Front-End quanto Back-End, e
                estou sempre pronta para enfrentar novos desafios.
              </p>
              <div className="card-actions justify-end m-5">
                <Button className=" btn-primary bg-cyan-300  text-black w-25">
                  Descaregar CV
                </Button>
              </div>
            </div>
          </section>
          <section className="w-96 m-5">
            <div className="text-white card-body">
              <h2 className="text-subtitle text-white" id="Habilidades">
                Habilidades
              </h2>
              <p>
                Figma HTML CSS JAVA TailwindCSS Pacote Microsoft Office
                TailwindCSS PHP javascript React
              </p>
            </div>
          </section>
          <section className="w-96 m-5">
            <div>
              <h2 className="text-subtitle text-white">Experiência</h2>
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 md:text-end text-white">
                    <time className="font-mono italic">2025</time>
                    <div className="text-lg font-black">BYTES4FUTURE</div>
                    participou no progama BOOTCAMP do BYTES4FUTURE. FRONT-END e
                    BACK-END
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end md:mb-10 text-white">
                    <time className="font-mono italic">2024</time>
                    <div className="text-lg font-black">BYTES4FUTURE</div>
                    participou no progama POWER UP do BYTES4FUTURE. FRONT-END e
                    BACK-END
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 md:text-end text-white">
                    <time className="font-mono italic">2023</time>
                    <div className="text-lg font-black">Readytowork</div>
                    participou no Readytowork e um curso oferecido pelo Banco
                    comercial absa com o objectivo de ensinar as competências
                    pofissionais, Interpessoais, finaceiras e empresarias;
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end md:mb-10 text-white">
                    <time className="font-mono italic">2023</time>
                    <div className="text-lg font-black">Hackathon</div>
                    Participou no hackathon-olimpiadas juvenis, onde procurou-se
                    responder aos desafioas do sector da saúde em Moçambique por
                    meio da TIC;
                  </div>
                  <hr />
                </li>
              </ul>
            </div>
          </section>

          <section className=" w-96 m-5">
            <div className="card-body">
              <h2 className="text-subtitle text-white" id="Porject">
                Projectos
              </h2>
              <Carousel className="w-full max-w-sm">
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
          <section className="  w-96 m-5">
            <div className="card-body">
              <h2 className="text-subtitle text-white" id="Contact">
                Contactos
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=" text-white">Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Qual é o seu nome? " {...field} />
                        </FormControl>
                        <FormLabel className=" text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Qual e o seu email? "
                            {...field}
                          />
                        </FormControl>
                        <FormLabel className=" text-white">Email</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Escreva a sua messagen aqui." />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className=" btn-primary bg-cyan-300  text-black w-25"
                  >
                    enviar
                  </Button>
                </form>
              </Form>
            </div>
          </section>
        </main>
        <footer className="flex  items-center justify-between p-4">
          <section className=" text-white mx-auto">
            <div className="flex items-center gap-2">
              <PhoneCallIcon size={20} /> <p>+258 860453111</p>
            </div>

            <p>&copy; Densenvolvido por Maria Genia </p>
          </section>
        </footer>
      </div>
    </>
  );
};

import { ListIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between p-4">
        <h1 className="text-title  text-white p-2">Maria Génia</h1>
        <a href="#my_modal_8" className="bg-cyan-300 rounded-b-lg  mt-2 btn ">
          <ListIcon size={24} />
        </a>
        <div className="modal " role="dialog" id="my_modal_8">
          <div className="bg-gradient-to-r   from-cyan-300  to-black  w-screen h-screen  modal-box">
            <div className="modal-action flex  justify-center ">
              <div className="flex flex-col items-center">
                <a href="#Sobremim" className=" m-5">
                  <Button className=" btn-primary bg-cyan-300  text-black w-25">
                    Sobre mim
                  </Button>
                </a>
                <br />
                <a href="#Habilidades">
                  <Button className=" btn-primary bg-cyan-300  text-black w-25">
                    Habilidades
                  </Button>
                </a>
                <br />
                <a href="#Experiência">
                  <Button className=" btn-primary bg-cyan-300  text-black w-25">
                    Experiência
                  </Button>
                </a>
                <br />
                <a href="#Porject">
                  <Button className=" btn-primary bg-cyan-300  text-black w-25">
                    Porjectos
                  </Button>
                </a>
                <br />
                <a href="#Contact">
                  <Button className=" btn-primary bg-cyan-300  text-black w-25">
                    Contactos
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

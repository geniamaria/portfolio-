import { List } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <>
      <div className=" flex justify-between m-5 ">
        <h1 className="text-title text-white"> Maria Génia </h1>
        <a href="#my_modal_8" className="btn">
          <List size={24} />
        </a>
        <div className="modal blue-500" role="dialog" id="my_modal_8">
          <div className="modal-box">
            <div className="modal-action">
              <div className="mx-auto">
                <a
                  href="#Sobremim"
                  className="btn card card-dash bg-sky-500 w-30 m-5"
                >
                  Sobre mim
                </a>
                <br />
                <a href="#Habilidades" className=" card card-dash  w-30 m-5">
                  Habilidades
                </a>
                <br />
                <a
                  href="#Experiência"
                  className="btn card card-dash  w-30  m-5"
                >
                  Experiência
                </a>
                <br />
                <a href="#Porject" className="btn card card-dash  w-30 m-5">
                  Porject
                </a>
                <br />
                <a href="#Contact" className="btn card card-dash  w-30  m-5">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

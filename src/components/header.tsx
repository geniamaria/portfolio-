import { List } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <>
      <div className=" flex justify-between m-5 flex-row blue-500">
        <h1> Maria Génia </h1>

        <a href="#my_modal_8" className="btn">
          <List size={32} className="bg-red" />
        </a>
        <div className="modal" role="dialog" id="my_modal_8">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">This modal works with anchor links</p>
            <div className="modal-action">
              <a href="#" className="btn">
                Yay!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

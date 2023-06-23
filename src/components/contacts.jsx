import React from "react";
import Title from "./dan";

function Contacts() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/e2a9bd99-3555-4d33-a1bf-91b4c7ee0649"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
            <Title>Contacts</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none ring-2"
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 bg-transparent border-2 focus:outline-none ring-2"
          />

          <textarea
            name="messages"
            placeholder="Message"
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none ring-2"
          />

          <button
            type="button"
            className="text-center inline-block focus:outline-none px-8 py-3 ring-2 
          w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 
          to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
          >
            WORK WITH ME
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;

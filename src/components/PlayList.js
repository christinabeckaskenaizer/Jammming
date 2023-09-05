import React from "react";

export default function PlayList() {
    return (
        <>
            <div className="text-white text-lg font-semibold sm:w-1/2 mx-7 flex flex-col justify-center content-start">
                <input placeholder="Playlist Name" className="placeholder-shown:text-white text-center bg-transparent border-none p-2"></input>
                {/* < div className="ml-7 text-left text-white font-normal w-11/12" > */}
                <p className="text-black">hi</p>
                <p className="font-light text-black">hey</p>
                <hr className="mt-3"></hr>

            </div>
            <div className="flex flex-row mr-5">
                <p className="text-black">-</p>
            </div>
            {/* </div> */}
        </>
    )
}

import React from 'react'
import { Helmet } from 'react-helmet'

const TeamSection = () => {
    return <div className=" p-8 bg-gray-100 bg-origin-border dark:bg-gray-800 border-8 ring-8 ring-gray-100 border-gray-100 shadow ">
        <div>
            <Helmet>
                <title>Star Field | About us</title>
            </Helmet>
        </div>
    <p className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Professional team
    </p>
    <p className="text-center mb-16 text-xl font-normal text-gray-500 dark:text-gray-200 md:mx-16">
    This is a collaboratively web-based app made by students who are learning, This is a trial project that we have created to learn new things. If there are any improvements you would want to suggest, please feel free to let us know about them.
    </p>
    <div className="flex items-center flex-col md:flex-row md:ml-17 place-content-center gap-x-1 sm:ml-8">
        <div className="p-4https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleIwDM6fkHty6QW7YkPGWR3F3Ccp10bWehg&usqp=CAU">
            <div className="text-center mb-4 opacity-90">
                    <img alt="profile pic" src="https://avatars.githubusercontent.com/u/71009876?v=4" className="mx-auto object-cover rounded-full h-40 w-40 shadow-md "/>
            </div>
            <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                    ScriptedRain
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                    Head Developer
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                ScriptedRain is the Head Developer of Star Field. ScriptedRain has done the front-end and back-end of Star Field.
                </p>
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
            </div>
        </div>
        <div className="p-4">
            <div className="text-center mb-4 opacity-90">
                    <img alt="profile pic" src="https://avatars.githubusercontent.com/u/74632222?s=400&u=39d1044a6e037478cd344024812f2f03df8e2238&v=4" className="mx-auto object-cover rounded-full h-40 w-40 shadow-md "/>
            </div>
            <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                    Krishp058
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                    Co-Head Developer
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                    Krishp058 is the Co-Head Developer of Star Field. Krishp058 has done the front-end and back-end of Star Field.
                </p>
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
            </div>
        </div>
        <div className="p-4">
            <div className="text-center mb-4 opacity-90">
                    <img alt="profile pic" src="https://avatars.githubusercontent.com/u/83068695?v=4" className="mx-auto object-cover rounded-full h-40 w-40 shadow-md "/>
            </div>
            <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                    GhostReaper46
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                    Front-End Planner
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                    GhostReaper46 is the Front-End Planner of Star Field. GhostReaper46 planned the structure for the front-end of Star Field.
                </p>
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
            </div>
        </div>
        <div className="p-4 mr-4">
            <div className="text-center mb-4 opacity-90">
                    <img alt="profile pic" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1597374204170/yxboJdRi8.jpeg" className="mx-auto object-cover rounded-full h-40 w-40 shadow-md "/>
            </div>
            <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                    Blazexe Fire
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                    Part-Time Invester
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                Blazexe Fire is the Part-Time Invester of Star Field. Blazexe Fire currently hasn't invested anything yet.
                </p>
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
            </div>
        </div>
    </div>
</div>
}

export default TeamSection

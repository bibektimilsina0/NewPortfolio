import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot ,faArrowRightToBracket} from "@fortawesome/free-solid-svg-icons";
function Intro() {
    return (
        <div className="my-4">
            <div className="m-4">
                <h5 className="text-gray-400">-- Introduction</h5>
            </div>
            <div className="m-4">
                <h1 className="text-2xl ">Full-Stack Web Developer <br /> and Designer,</h1>
                <div className="flex">
                    <div className="w-1/2">

                    </div>
                    <div className="w-1/2">
                        <span className="pr-4"><FontAwesomeIcon icon={faLocationDot} style={{ color:" rgb(251 191 36)" }} /></span><span>Pokhara, Nepal</span>
                    </div>
                </div>

            </div>
            <div className="m-4">
                <p className="text-gray-400">
                    With a strong foundation in both frontend and backend technologies, I create web applications that not only look stunning but also deliver seamless user experiences.
                    <br />
                    I specialize in React.js, Next.js, Node.js,Express.js, and MongoDb, and I'm dedicated to staying updated with the latest trends in web development. My goal is to contribute innovative solutions to real-world challenges, turning ideas into reality.


                </p>
            </div>
            <div className="m-4">
                <h1 className="text-xl "><span className="text-amber-400"> My journey</span><a href="#journey"><span className="pl-4 "><FontAwesomeIcon icon={faArrowRightToBracket} style={{color:" rgb(251 191 36)"}}/></span></a></h1>

            </div>
        </div>
    );
}

export default Intro;
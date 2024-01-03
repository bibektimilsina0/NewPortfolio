import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Landing() {
    return (
        <div className="m-4 flex justify-evenly">
            <div className=" mt-8 text-center leading-loose items-center font-mono">
                <span className="text-xl "> I'm</span><br></br><br />
                <span className="text-bold text-5xl p-2 ">BIBEK <br /> TIMILSINA</span>
                <div>
                    <div className="my-24 flex justify-around">
                        <a href="https://www.facebook.com/bibek.timilsina.568" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.linkedin.com/in/bibek-timilsina-6a5477253/" target="_blank" rel="noopener noreferrer">   <FontAwesomeIcon icon={faLinkedin} /></a>

                        <a href="https://github.com/bikkibro" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} /></a>
                    </div>

                </div>
            </div>
            <Image
                src="/photo.jpg"
                width={400}
                height={400}
                alt='Bibek timilsina'
                className=""
            >

            </Image>
        </div>
    );
}

export default Landing;
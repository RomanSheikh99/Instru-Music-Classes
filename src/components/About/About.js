import React from 'react';
import messionImg from '../../images/mession.jpg'
import story from '../../images/story.jpg'

const About = () => {
    return (
        <div className="mt-10 px-8">
            <div>
                <h2 className="text-center my-4 text-4xl font-bold">About Instru...</h2>
                <p className="text-center text-xl mb-10">Top class music school in the world</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="">
                    <img className="" src={messionImg} alt="" />
                </div>
                <div className="">
                    <h2 className="text-4xl mb-8">Our Mession</h2>
                    <p className="text-justify leading-8">Music must first be defined and distinguished from speech, and from animal and bird cries. We discuss the stages of hominid anatomy that permit music to be perceived and created, with the likelihood of both Homo neanderthalensis and Homo sapiens both being capable. The earlier hominid ability to emit sounds of variable pitch with some meaning shows that music at its simplest level must have predated speech. The possibilities of anthropoid motor impulse suggest that rhythm may have preceded melody, though full control of rhythm may well not have come any earlier than the perception of music above. </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 my-12">
                <div className="">
                <h2 className="text-4xl mb-8">Our Story</h2>
                    <p className="text-justify leading-8">musical instrument, any device for producing a musical sound. The principal types of such instruments, classified by the method of producing sound, are percussion, stringed, keyboard, wind, and electronic.Musical instruments are almost universal components of human culture: archaeology has revealed pipes and whistles in the Paleolithic Period and clay drums and shell trumpets in the Neolithic Period. It has been firmly established that the ancient city cultures of Mesopotamia, the Mediterranean, India, East Asia, and the Americas all possessed diverse and well-developed assortments of musical instruments, indicating that a long previous development must have existed. As to the origin of musical instruments, however, there can be only conjecture.</p>
                </div>
                <div className="">
                <img className="" src={story} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
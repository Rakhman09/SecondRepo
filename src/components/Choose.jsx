import React, { useState } from "react";
import Ingredient from "./Ingredient"; 
import Plan from "./Plan";

const Choose = () => {

    const apikey = import.meta.env.VITE_API_KEY;

    const [infoFromOptions, setInfoFromOptions] = useState();

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [gtpPromptText, setGtpPromptText] = useState([]);
    const [imageUrl, setImageUrl] = useState('');


    const ingredientsData = [
        { name: " Biceps", imageSrc: "/images/Biceps.webp" },
        { name: " Legs ", imageSrc: "/images/Legs-workout.jpg" },
        { name: " Back", imageSrc: "/images/Back.webp" },
        { name: " All Body", imageSrc: "/images/all-body.jpg" },
    ];

  
    const createPromtText = () => {
        let text = 'how to improve ' + gtpPromptText.toString() + 'other settings:' + infoFromOptions;
        console.log('prompt text: ' , text);
        return text;
    }



    const handleIngredientClick = (ingredient) => {
       
            setGtpPromptText([...gtpPromptText, ingredient.name]);
        
    };


    // const generateText = () => {
    //     let textEs = 'Generate me text for essay';
    //     console.log("Generation of text...");
    //     const conditional = {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${apikey}`,
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             prompt: textEs,
    //             max_tokens: 350,
    //         }),
    //     }
    //     try{
    //         const response = await fetch(
    //             "https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions",
    //             conditional
    //         );
    //         const data = await response.json();
    //         console.log('data: ', data);
    //         setImageUrl(data.data[0].url);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     }
    // }



    const generateImage = async (promptText) => {
        console.log('started');
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apikey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: promptText,
                n: 1,
                size: "512x512",
            }),
        };

        try {
            const response = await fetch(
                "https://api.openai.com/v1/images/generations",
                options
            );
            const data = await response.json();
            console.log('data: ', data);
            setImageUrl(data.data[0].url);
        } catch (error) {
            console.error(error);
        }

    };



    return (
        <div className="bg-blue-900">
            <div className=" pt-20 flex flex-col items-center justify-center">
                <div className="text-white">GPT gym Generation</div>
                <div className="text-white">This GPT: 
                    <ul className="">
                        <li>can make your own gym plan</li>
                        <li>helps gain weight</li>
                        <li>gives the best advice for exercises</li>
                        <li>helps to be a "ripped" man and etc.</li>
                    </ul>
                </div>
                <div className="pt-10 text-2xl text-white">What would you like to improve?</div>
            </div>
            <div className="flex flex-wrap pt-10 justify-center">
                {ingredientsData.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        imageSrc={ingredient.imageSrc}
                        isSelected={selectedIngredients.includes(ingredient)}
                        onClick={() => handleIngredientClick(ingredient)}
                    />
                ))}
                
                
                <button onClick={() => generateImage(createPromtText())}  
                className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400"
                >
                    Generate Dish
                </button>
            </div>
            <div className="ml-[200px] flex">
                <h3 className="text-white">To improve:</h3>
                <ul className="flex text-white">
                    {gtpPromptText.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center">
                <img className="rounded-3xl p-6" src={imageUrl} width={400} height={400} alt="created image" />
            </div>
            <p className="text-green-400 text-xl">infoFromOptions: {infoFromOptions}</p>
            <Plan setInfoFromOptions={setInfoFromOptions} />
        </div>
    );
};

export default Choose;
import React from 'react'
import { useState, useEffect } from 'react';

const Plan = ({setInfoFromOptions}) => {

    const [bodyPart, setBodyPart] = useState('');
    const [level, setLevel] = useState('');
    const [goal, setGoal] = useState('');
    const [activity, setActivity] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');

    const sendInfoOption = () => {
        setInfoFromOptions(`bodyPart: ${bodyPart}, level: ${level}, goal: ${goal}, activity: ${activity}, height: ${height}, age: ${age}, weight: ${weight}` )
    }

    useEffect(()=>{
       sendInfoOption();
    }, [bodyPart, level, goal,activity, height, age, weight])

  return (
    <div className='flex flex-col items-center bg-blue-500 w-full pt-[100px]'>
        <h1>Options</h1>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <div className='flex gap-4 mt-3'>
            <div>
                <p>To improve:</p>
                <select onChange={(e) => setBodyPart(e.target.value)} className='w-[250px] rounded-3xl p-1' name="To improve" id="To improve">
                    <option value=""></option>
                    <option value="All body">All body</option>
                    <option value="Legs">Legs</option>
                    <option value="Arm">Arm</option>
                    <option value="Back">Back</option>
                </select>
            </div>

            <div>
                <p>What's your level</p>
                <select onChange={(e) => setLevel(e.target.value)} className='w-[250px] rounded-3xl p-1' name="Level" id="Level">
                    <option value=""></option>
                    <option value="Novice">Novice</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                </select>
            </div>

            <div>
                <p>The goal of your workout:</p>
                <select onChange={(e) => setGoal(e.target.value)} className='w-[250px] rounded-3xl p-1' name="Thegoal" id="Thegoal">
                    <option value=""></option>
                    <option value="To keep my body in shape">To keep my body in shape</option>
                    <option value="To build muscle mass">To build muscle mass</option>
                    <option value="To lose weight">To lose weight</option>
                    <option value="To gain weight">To gain weight</option>
                </select>
            </div>

        </div>

        <div className='flex gap-4 mt-3'>
            <div>
                <p>What kind of activity are you?</p>
                <select onChange={(e) => setActivity(e.target.value)} className='w-[250px] rounded-3xl p-1' name="activity" id="activity">
                    <option value=""></option>
                    <option value="Inactive">Inactive</option>
                    <option value="Average activity">Average activity</option>
                    <option value="Very active">Very active</option>
                    <option value="I support a healthy lifestyle">I support a healthy lifestyle</option>
                </select>
            </div>

            <div>
                <p>Your height</p>
                <input onChange={(e) => setHeight(e.target.value)} className='w-[250px] rounded-3xl p-1' type="text" />
            </div>

            <div>
                <p>Your age</p>
                <input onChange={(e) => setAge(e.target.value)} className='w-[250px] rounded-3xl p-1' type="text" />
            </div>
        </div>

        <div className='flex gap mt-3'>
            <div>
                <p>Your weight</p>
                <input onChange={(e) => setWeight(e.target.value)} className='w-[250px] rounded-3xl p-1' type="text" />
            </div>
        </div>

        <div className='mt-10 text-white'>
            <div>
                To improve: {bodyPart}
            </div>
            <div>
                Your level: {level}
            </div>
            <div>
                Your goal: {goal}
            </div>
            <div>
                Your activity: {activity}
            </div>
            <div>
                Your height: {height}
            </div>
            <div>
                Your age: {age}
            </div>
            <div>
                Your weight: {weight}
            </div>
        </div>
        <button className='p-3 bg-red-400' onClick={() => sendInfoOption()}>get options</button>
        <div className='p-3 gap-3 flex-wrap mt-10 w-[80%]'>
            <p>selected bodyPart:<span className="text-orange-500 font-bold">{bodyPart}</span></p>
            <p>selected level:<span className="text-orange-500 font-bold">{level}</span></p>
            <p>selected goal:<span className="text-orange-500 font-bold">{goal}</span></p>
            <p>selected activity:<span className="text-orange-500 font-bold">{activity}</span></p>
            <p>selected height:<span className="text-orange-500 font-bold">{height}</span></p>
            <p>selected age:<span className="text-orange-500 font-bold">{age}</span></p>
            <p>selected weight:<span className="text-orange-500 font-bold">{weight}</span></p>
        </div>
    </div>
  )
}

export default Plan;
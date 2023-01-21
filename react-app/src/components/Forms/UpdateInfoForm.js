import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateAns } from '../../store/questions';
import OpenModalButton from '../OpenModalButton'
import { useModal } from '../../context/Modal';
import { editUser } from '../../store/session';
// import { updateImage } from '../../store/images';


export default function UpdateInfo() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [display, setDisplay] = useState('gender')
    const [hidden, setHidden] = useState('none')
    const [visible, setVisible] = useState('flex')
    const [gender, setGender] = useState('')
    const [sexualOrientation, setSexual_Orientation] = useState('')
    const [income, setIncome] = useState(0)
    const [kids, setKids] = useState(0)
    const [relationshipGoal, setRelationshipGoal] = useState('')
    const [ethnicity, setEthnicity] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState(0)
    const [inebriates, setInebriates] = useState('')
    const [religion, setReligion] = useState('')
    const [relationshipStatus, setRelationshipStatus] = useState(('Single', 'Single'))

    const genderOptions = [('Man', 'Man'), ('Woman', 'Woman'), ('Nonbinary', 'Nonbinary')]
    const sexualOrientationOptions = [('Straight', 'Straight'), ('Gay', 'Gay'), ('Lesbian', 'Lesbian'), ('Bisexual', 'Bisexual'), ('Queer', 'Queer'), ('Pansexual', 'Pansexual'), ('Questioning', 'Questioning'), ('Heteroflexible', 'Heteroflexible'), ('Homoflexible', 'Homoflexible'), ('Asexual', 'Asexual'), ('Gray-asexual', 'Gray-asexual'), ('Demisexual', 'Demisexual'), ('Reciprosexual', 'Reciprosexual'), ('Akiosexual', 'Akiosexual'), ('Aceflux', 'Aceflux'), ('Grayromantic', 'Grayromantic'), ('Demiromantic', 'Demiromantic'), ('Recipromantic', 'Recipromantic'), ('Akioromantic', 'Akioromantic'), ('Aroflux', 'Aroflux')]
    const incomeOptions = [('10k-19k', '10k-19k'), ('20k-29k', '20k-29k'), ('30k-39k', '30k-39k'), ('40k-49k', '40k-49k'), ('50k-59k', '50k-59k'), ('60k-69k', '60k-69k'), ('70k-79k', '70k-79k'), ('80k-89k', '80k-89k'), ('90k-99k', '90k-99k'), ('100k-109k', '100k-109k'), ('110k-119k', '110k-119k'), ('120k-129k', '120k-129k'), ('130k-139k', '130k-139k'), ('140k-149k', '140k-149k'), ('150k+', '150k+')]
    const kidsOptions = [(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8)]
    const relationshipGoalOptions = [('Monogamous', 'Monogamous'), ('Non-monogamous', 'Non-monogamous'), ('Open to either', 'Open to either')]
    const ethnicityOptions = [('Asian', 'Asian'), ('Black', 'Black'), ('Hispanic/Latin', 'Hispanic/Latin'), ('Indian', 'Indian'), ('Middle Eastern', 'Middle Eastern'), ('Native American', 'Native American'), ('Pacific Islander', 'Pacific Islander'), ('White', 'White'), ('Other ethnicity', 'Other ethnicity')]
    const heightOptions = [(4.0, 4.0), ("4'1", "4'1"), ("4'2", "4'2"), ("4'3", "4'3"), ("4'4", "4'4"), ("4'5", "4'5"), ("4'6", "4'6"), ("4'7", "4'7"), ("4'8", "4'8"), ("4'9", "4'9"), ("4'10", "4'10"), ("4'11", "4'11"), ("5'0", "5'0"), ("5'1", "5'1"), ("5'2", "5'2"), ("5'3", "5'3"), ("5'4", "5'4"), ("5'5", "5'5"), ("5'6", "5'6"), ("5'7", "5'7"), ("5'8", "5'8"), ("5'9", "5'9"), ("5'10", "5'10"), ("5'11", "5'11"), ("6'0", "6'0"), ("6'1", "6'1"), ("6'2", "6'2"), ("6'3", "6'3"), ("6'4", "6'4"), ("6'5", "6'5"), ("6'6", "6'6"), ("6'7", "6'7"), ("6'8", "6'8"), ("6'9", "6'9"), ("6'10", "6'10"), ("6'11", "6'11"), ("7'0+", "7'0+")]
    const inebriatesOptions = [['yes', true], ['no', false]]
    const religionOptions = [('Agnosticism', 'Agnosticism'), ('Atheism', 'Atheism'), ('Christianity', 'Christianity'), ('Judaism', 'Judaism'), ('Catholicism', 'Catholicism'), ('Islam', 'Islam'), ('Hinduism', 'Hinduism'), ('Buddhism', 'Buddhism'), ('Sikh', 'Sikh'), ('Other religion', 'Other religion')]
    const relationshipStatusOptions = [('Single', 'Single'), ('Seeing someone', 'Seeing someone'), ("It's complicated", "It's complicated"), ('In a relationship', 'In a relationship'), ('Married', 'Married'), ('Divorced', 'Divorced')]
    // const weightOptions = [(50, 50), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8)]

    const toggleDisplay = (e) => {
        setDisplay(e)
    }

    const updateRelationshipStatus = (e) => {
        setRelationshipStatus(e.target.value)
    }

    const updateReligion = (e) => {
        setReligion(e.target.value)
    }

    const updateInebriates = (e) => {
        if (e.target.value === 'false') setInebriates(false)
        else setInebriates(true)
    }

    const updateWeight = (e) => {
        setWeight(e.target.value)
    }

    const updateHeight = (e) => {
        setHeight(e.target.value)
    }

    const updateEthnicity = (e) => {
        setEthnicity(e.target.value)
    }

    const updateRelationshipGoal = (e) => {
        // console.log(e.target.value)
        setRelationshipGoal(e.target.value)
    }

    const updateKids = (e) => {
        setKids(e.target.value)
    }

    const updateIncome = (e) => {
        // let newcome = +(e.target.value[0] + e.target.value[1])
        // console.log(newcome)
        // setIncome(newcome)
        setIncome(e.target.value)
    }

    const updateSexualOrientation = (e) => {
        setSexual_Orientation(e.target.value)
    }

    const updateGender = (e) => {
        setGender(e.target.value)
    }


    const submitUpdate = async (e) => {
        e.preventDefault()

        const newInfo = {
            // relationship_status: relationshipStatus,
            gender,
            sexual_orientation: sexualOrientation,
            income,
            kids,
            relationship_goal: relationshipGoal,
            race: ethnicity,
            height,
            weight,
            inebriates,
            religion
        }
        return await dispatch(editUser(newInfo)).catch(async (res) => console.log(res))
    }

    return (
        <form onSubmit={submitUpdate}>
            <div className='info-content'>

                <div className='top-bar-info'>
                </div>
                <div className='info-left'>


                    <div className='basic-info'>
                        <h2>BASICS</h2>
                        <div onClick={() => toggleDisplay('gender')} className='detailed_click'>
                            <h3>Gender</h3>
                            {gender}
                        </div>
                        <div onClick={() => toggleDisplay('sexualOrientation')} className='detailed_click'>
                            <h3>Sexual Orientation</h3>
                            { }
                        </div>
                        <div onClick={() => toggleDisplay('relationshipGoal')} className='detailed_click'>
                            <h3>Relationship Goal</h3>
                            {user['relationship goal']}
                        </div>
                        <div onClick={() => toggleDisplay('relationshipStatus')} className='detailed_click'>
                            <h3>Relationship Status</h3>
                            {user['relationship status']}
                        </div>

                    </div>
                    <div className='look-info'>
                        <h2>LOOKS</h2>
                        <div onClick={() => toggleDisplay('height')} className='detailed_click'>
                            <h3>Height</h3>
                            {user.height}
                        </div>
                        <div onClick={() => toggleDisplay('weight')} className='detailed_click'>
                            <h3>Body Weight{user.weight}</h3>
                            {user.weight}
                        </div>
                    </div>
                    <div className='background-info'>
                        <h2>BACKGROUND</h2>
                        <div onClick={() => toggleDisplay('ethnicity')} className='detailed_click'>
                            <h3>Ethnicity</h3>
                            {user.race}
                        </div>
                        <div onClick={() => toggleDisplay('religion')} className='detailed_click'>
                            <h3>Religion</h3>
                            {user.religion}
                        </div>
                        <div onClick={() => toggleDisplay('income')} className='detailed_click'>
                            <h3>Yearly Income</h3>
                            {user.income}
                        </div>
                    </div>
                    <div className='lifestyle-info'>
                        <h2>LIFESTYLE</h2>
                        <div onClick={() => toggleDisplay('inebriates')} className='detailed_click'>
                            <h3>Inebriants</h3>
                            {user.inebriates}
                        </div>
                    </div>
                    <div className='FAMILY-info'>
                        <h2>FAMILY</h2>
                        <div onClick={() => toggleDisplay('kids')} className='detailed_click'>
                            <h3>Children</h3>
                            {user.kids}
                        </div>
                    </div>
                </div>

                <div className='info-right'>

                    {display == 'gender' &&
                        <>
                            <h3 className='detailsRightTitle'>Gender</h3>
                            <div>
                                <select
                                    type='text'
                                    name='gender'
                                    onChange={updateGender}
                                    value={gender || 'none'}
                                >
                                    {genderOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }
                    {display == 'sexualOrientation' &&
                        <>
                            <h3 className='detailsRightTitle'>What is your sexual orientation?</h3>
                            <div>
                                <select
                                    type='text'
                                    name='sexual_orientation'
                                    onChange={updateSexualOrientation}
                                    value={sexualOrientation || 'none'}
                                >
                                    {sexualOrientationOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }

                    {display == 'income' &&
                        <>
                            <h3 className='detailsRightTitle'>What is your yearly income?</h3>
                            <div>
                                <select
                                    type='text'
                                    name='income'
                                    onChange={updateIncome}
                                    value={income}
                                >
                                    {incomeOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }
                    {display == 'kids' &&
                        <>
                            <h3 className='detailsRightTitle'>Do you have children?</h3>
                            <div>
                                <select
                                    type='text'
                                    name='kids'
                                    onChange={updateKids}
                                    value={kids || 'none'}
                                >
                                    {kidsOptions.map(option => (
                                        <option key={option[0]} value={option[1]}>{option[0]}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }
                    {display == 'relationshipGoal' &&
                        <>
                            <h3 className='detailsRightTitle'> What kind of relationship do you want?</h3>
                            <div>
                                <select
                                    type='text'
                                    name='relationship_goal'
                                    onChange={updateRelationshipGoal}
                                    value={relationshipGoal || 'none'}
                                >
                                    {relationshipGoalOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }
                    {display == 'ethnicity' &&
                        <>
                            <h3 className='detailsRightTitle'> What is your ethnicity?</h3>
                            <div>
                                <select
                                    type='text'
                                    name='ethnicity'
                                    onChange={updateEthnicity}
                                    value={ethnicity || 'none'}
                                >
                                    {ethnicityOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }
                    {display == 'height' &&
                        <>
                            <h3 className='detailsRightTitle'> What is your height?</h3>
                            <div>
                                <select
                                    type='text'
                                    name='height'
                                    onChange={updateHeight}
                                    value={height || 'none'}
                                >
                                    {heightOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }
                    {display == 'weight' &&
                        <>
                            <h3 className='detailsRightTitle'>What is your weight in pounds?</h3>
                            <div>
                                <input
                                    type='number'
                                    name='weight'
                                    onChange={updateWeight}
                                    value={weight}
                                >
                                    {/* {weightOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))} */}

                                </input>
                            </div>
                        </>
                    }
                    {display == 'inebriates' &&
                        <>
                            <h3 className='detailsRightTitle'>Do you smoke, drink or take in any other substances?</h3>
                            <div>
                                <select
                                    type='text'
                                    name='inebriates'
                                    onChange={updateInebriates}
                                    value={inebriates || 'none'}
                                >
                                    {inebriatesOptions.map(option => (
                                        <option key={option[0]} value={option[1]}>{option[0]}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }
                    {display == 'religion' &&
                        <>
                            <h3 className='detailsRightTitle'> What is your religion?</h3>
                            <div>
                                <select
                                    type='text'
                                    name='religion'
                                    onChange={updateReligion}
                                    value={religion || 'none'}
                                >
                                    {religionOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }
                    {display == 'relationshipStatus' &&
                        <>
                            <h3 className='detailsRightTitle'> What is your relationship status?</h3>
                            <div>
                                <select
                                    type='text'
                                    name='relationship_status'
                                    onChange={updateRelationshipStatus}
                                    value={relationshipStatus || 'none'}
                                >
                                    {relationshipStatusOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    }
                    <button type='submit' >SUBMIT</button>
                </div>
            </div>
        </form>

    )
}
// onClick={() => submitUpdate()} 
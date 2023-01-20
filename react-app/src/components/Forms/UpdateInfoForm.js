import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateAns } from '../../store/questions';
import OpenModalButton from '../OpenModalButton'
import { useModal } from '../../context/Modal';
// import { updateImage } from '../../store/images';


export default function UpdateInfo() {

    const user = useSelector(state => state.user)
    console.log(user)
    return (<>

        <div className='top-bar-info'></div>
        <div className='info-content'>
            <div className='info-left'>
                <div className='basic-info'>
                    <h2>BASICS</h2>
                    <div className='detailed_click'>
                        <h3>Gender</h3>
                        {user.gender}
                    </div>
                    <div className='detailed_click'>
                        <h3>Orientation</h3>
                        { }
                    </div>
                    <div className='detailed_click'>
                        <h3>Relationship Goal</h3>
                        {user['relationship goal']}
                    </div>
                    <div className='detailed_click'>
                        <h3>Relationship Status</h3>
                        {user['relationship status']}
                    </div>

                </div>
                <div className='pronouns-info'>
                    <h2>PRONOUNS</h2>
                    <div className='detailed_click'>
                        <h3>Pronouns</h3>
                        { }
                    </div>
                </div>
                <div className='look-info'>
                    <h2>LOOKS</h2>
                    <div className='detailed_click'>
                        <h3>Height</h3>
                        {user.height}
                    </div>
                    <div className='detailed_click'>
                        <h3>Body Weight</h3>
                        {user.weight}
                    </div>
                </div>
                <div className='background-info'>
                    <h2>BACKGROUND</h2>
                    <div className='detailed_click'>
                        <h3>Ethnicity</h3>
                        {user.race}
                    </div>
                    <div className='detailed_click'>
                        <h3>Politics</h3>
                        { }
                    </div>
                    <div className='detailed_click'>
                        <h3>Religion</h3>
                        {user.religion}
                    </div>
                    <div className='detailed_click'>
                        <h3>Income</h3>
                        {user.income}
                    </div>
                    <div className='detailed_click'>
                        <h3>Placeholder</h3>
                        { }
                    </div>
                </div>
                <div className='lifestyle-info'>
                    <h2>LIFESTYLE</h2>
                    <div className='detailed_click'>
                        <h3>Inebriants</h3>
                        {user.inebriates}
                    </div>
                </div>
                <div className='FAMILY-info'>
                    <h2>FAMILY</h2>
                    <div className='detailed_click'>
                        <h3>Children</h3>
                        {user.kids}
                    </div>
                </div>
            </div>

            <div className='info-right'>




            </div>
        </div>



    </>)
}

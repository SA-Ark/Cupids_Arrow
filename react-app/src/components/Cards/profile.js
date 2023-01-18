
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useDispatch } from 'react-router-dom';

function SpotCard({ answers, match, place }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { id, first_name, gender, biography, city,
        state, age, weight, kids, relationship_goal,
        race, inebriants, religion } = match
    ///DETERMINE BY STATE DIAGRAM
    const myID = useSelector(state => state.current.user.id)
    let myQuestions = answers.filter(x => x.user_id == myID)
    let theirQuestions = answers.filter(x => x.user_id == id)

    if (!myID) return null;

    return (
        <div id='red'>

            <div id='topprofileGreenCOL'>




                <div id='picheaderPink'>
                    <div id='pinkleftROW'>


                        <div id='pinkleftCOLleft'>

                            <div id='pinkleftCOLleft' classname='top'>
                                <div id='name'>

                                </div>
                                <div id='verified'>

                                </div>

                            </div>
                            <div id='pinkleftCOLleft' classname='bottom'>
                                <div id='age'>

                                </div>
                                <div id='city'>

                                </div>
                                <div id='state'>

                                </div>

                            </div>



                        </div>



                        <img id='pinkleftCOLrightMAtch%'>

                        </img>

                    </div>


                    <div id='pinkright'>
                        <div id='button'>
                        </div>
                        <div id='button'>
                        </div>
                        <div id='button'>
                        </div>
                    </div>
                </div>

                <div id='picsectionID'>
                    <img>
                    </img>
                    <img>
                    </img>
                    <img>
                    </img>
                </div>
                <div id='tiny '>

                </div>
            </div>


            <div id='bottomprofilePP'>



                <div id='bottomproLEFTcol'>

                </div>

                <div id='bottomproRIGHTcol'>
                    <div id='match'>

                    </div>
                
                    <>
                    </>
                </div>


            </div>










            <div id='questionsMATHarea'>

            </div>

        </div>
    )

}

export default SpotCard
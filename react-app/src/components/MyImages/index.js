import MyImageForm from '../Forms/MyImageForm'
import OpenModalButton from '../OpenModalButton'

const MyImages = () => {





  return(
    <>
      < OpenModalButton
      id='createreviewbutt'
      buttonText="images"
      modalComponent={<MyImageForm />}
      />
    </>
  )

}

export default MyImages;

import classN from '../styles/Summary.module.css'
import image from '../assets/images/success.png'

export default function Summary() {
    return (
        <>
            <div className={classN.summary}>
                <div className={classN.point}>
                    progress bar will be placed here
                    <p className={classN.score}>
                        Your score is <br />
                        5 out of 10
                    </p>
                </div>

                <div className={classN.badge}>
                    <img src={image} alt="Success" />
                </div>
            </div>
        </>
    );
}
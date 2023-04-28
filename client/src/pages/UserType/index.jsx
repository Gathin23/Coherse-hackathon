import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';

function UserType(props) {
    const navigate = useNavigate();
    const user = props.user

    const handleDeveloperBtnClick = () => {
        props.handleDeveloperClick();
        navigate("/developer");
    }

    const handleMentorBtnClick = () => {
        props.handleMentorClick();
        navigate("/mentor");
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Home</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img className={styles.img} src="./images/profile.jpg" alt="login" />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.from_heading}>{`Hello! ${user.name}`}</h2>
                    <img
                        src={user.picture}
                        alt="profile"
                        className={styles.profile_img}
                    />
                    <p>Tell us who you are?</p>
                    <div className='buttons-pane'>
                        <button className={styles.btn}>Developer</button>
                        <button className={styles.btn}>Mentor</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserType;

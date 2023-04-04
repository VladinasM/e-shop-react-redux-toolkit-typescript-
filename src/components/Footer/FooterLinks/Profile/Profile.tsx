import React from 'react';
import classes from './Profile.module.css'
import LoginForm from "./LoginForm";

const Profile = () => {
    return (
        <section className={classes.profile}>
            <h2 className={classes.title}>Анкета</h2>
            <h3>Вход</h3>
            <LoginForm/>
        </section>
    );
};

export default Profile;
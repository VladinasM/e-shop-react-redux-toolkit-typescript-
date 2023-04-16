import React, {useRef, useState} from 'react';
import classes from "./SearchForm.module.css";

const SearchForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const inputFocus = useRef<HTMLInputElement>(null)
    const toggleForm = () => {
        setIsOpen(prevState => !prevState)
        if(inputFocus?.current){
            inputFocus.current.focus()
        }
    }
    const onFormSubmit = (e:any) => {
        e.preventDefault()
    }

    return (
        <div className={classes.searchForm}>
            <button onClick={toggleForm} className={classes.loupe}></button>
            <form className={`${classes.form} ${isOpen && classes.show}`} action="">
                <label htmlFor="search">
                    <span className={classes.searchFormLabel}>Search for:</span>
                    <input id='search' ref={inputFocus}  type="text" placeholder="Поиск..."/>
                </label>
                <button></button>
            </form>
        </div>
    );
};

export default SearchForm;
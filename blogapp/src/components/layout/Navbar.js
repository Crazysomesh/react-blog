import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLInks from './SignedInLinks';
import SignedOutLInks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const {auth, profile} = props;
    //console.log(auth)
    const links = auth.uid ? <SignedInLInks profile={profile} /> : <SignedOutLInks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">BINGO!</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
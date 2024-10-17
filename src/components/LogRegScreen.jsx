import React from "react";
import { useState } from "react";
import cn from "https://cdn.skypack.dev/classnames@2.3.2";
import './styles/logRegScreen.css';

function LogRegScreen() {
    const [switched, setSwitched] = useState(false);
    return (
        <div className="local-container">
            <div className={cn('demo', { 's--switched': switched })}>
                <div className="demo__inner">
                    <div className="demo__forms">
                        <div className="demo__form">
                            <div className="demo__form-content">
                                <form className="form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form__heading">heading1</div>
                                    <label className="form__field" key="field">
                                        <span className="form__field-label">field</span>
                                        <input className="form__field-input" type="field" />
                                    </label>
                                    <button type="submit" className="form__submit">
                                        label
                                    </button>
                                    <p>asdfasdf</p>
                                </form>
                            </div>
                        </div>
                        <div className="demo__form">
                            <div className="demo__form-content">
                                <form className="form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form__heading">heading</div>
                                    <label className="form__field" key="field">
                                        <span className="form__field-label">field</span>
                                        <input className="form__field-input" type="field" />
                                    </label>
                                    <button type="submit" className="form__submit">
                                        label
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="demo__switcher">
                        <div className="demo__switcher-inner">
                            <div className="demo__switcher-content">
                                <div className="demo__switcher-text">
                                    <div>
                                        <h3>New here?</h3>
                                        <p>
                                            Sign up and discover great amount of new opportunities!
                                        </p>
                                    </div>
                                    <div>
                                        <h3>One of us?</h3>
                                        <p>
                                            If you already has an account, just sign in. We&apos;ve
                                            missed you!
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="demo__switcher-btn"
                                    onClick={() => setSwitched(!switched)}
                                >
                                    <span className="animated-border" />
                                    <span className="demo__switcher-btn-inner">
                                        <span>Sign Up</span>
                                        <span>Sign In</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LogRegScreen;
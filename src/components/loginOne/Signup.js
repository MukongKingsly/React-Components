import { useState, useRef } from "react"
import { Link } from "react-router-dom"

export default function SignupOne() {
    const passwordIconRef = useRef(null)
    const passwordInputRef = useRef(null)

    function toggle() {
        const iconClassList = passwordIconRef.current.classList
        const password = passwordInputRef.current

        if ( iconClassList.contains("icon-see") ) {
            password.type = "text"
            iconClassList.remove('icon-see')
            iconClassList.add('icon-blind')

        } else {
            password.type = "password"
            iconClassList.add('icon-see')
            iconClassList.remove('icon-blind')
        }

    }
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: "",
            userDesc: ""

        }
    )

    function handleChange(event) {

        const {name, value} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (formData.password.length < 8) {
            alert("Password needs to be at least 8 characters long")
            return

        } else {
            //submit formData to API here
            //navigate to next page
        }
    }

    return (
        <div className="componentOne-signup compOne-col-2">
            <div className="componentOne-form-wrapper ">
                <h2>Let's set up your account</h2>
                <p>Already have an account? <Link to="/">Sign in</Link></p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        required
                        placeholder="Your name"
                        onChange={handleChange}
                        name="name"
                        value={formData.firstName}
                    />
                    <input
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={handleChange}
                        name="email"
                        value={formData.firstName}
                    />
                    <select
                        onChange={handleChange}
                        name="userDesc"
                        required
                    >
                        <option value="">I would describe my user type as</option>
                        <option value="administrator">Admin</option>
                        <option value="contributor">Contributor</option>
                        <option value="reader">Reader</option>
                    </select>
                    <div className="passwordBox">

                        <input
                            type="password"
                            ref={passwordInputRef}
                            required
                            placeholder="Password"
                            onChange={handleChange}
                            name="password"
                            value={formData.password} //password will be encrypted before sending same over the air!
                        />
                        <div
                            onClick={toggle}
                            ref={passwordIconRef}
                            className="background icon-see"
                        >
                        </div>
                    </div>

                    <small>Minimum 8 characters</small>
                    <button>Next</button>
                    <small>By clicking the 'Next' button, you agreee to creating a free account and to <Link to="/terms">Terms of Service</Link> and to <Link to="/privacy">Privacy Policy</Link></small> 
                </form>
            </div>
        </div>
    )
}
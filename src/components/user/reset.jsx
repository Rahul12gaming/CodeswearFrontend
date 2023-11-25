export const Reset=()=>
{
    return (
        <>
            <div className="reset-container">
                <p>Reset Password</p>
                <form action="">
                    <label>New Password:</label>
                    <input type="text" />

                    <label>Confirm Password:</label>
                    <input type="text" />

                    
                    <button type="submit">Reset</button>
                </form>
            </div>
        </>
    )
}
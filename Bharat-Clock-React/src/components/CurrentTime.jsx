function CurrentTime(){

    const currDate = new Date().toLocaleDateString();
    const currTime = new Date();

    return <>
        <p className="lead">
            This is the current time: {currDate} - {currTime.toLocaleTimeString()}
        </p>
    </>
}

export default CurrentTime;
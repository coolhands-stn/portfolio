const regex = {
    firstname:/^([a-zA-Z]{3,20})\s?$/,
    lastname:/([a-zA-Z]{3,20})\s?$/,

    username: /^([a-zA-Z]{1})\.([a-zA-Z]){3,20}\s?$/,
    password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    // at least a symbol, upper and lower case letters and a number
    //  /^[\w\d-@?.?]{8,50}$/

    phone: /[0-9]{10}/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,

    topic: /^([a-zA-Z]{4,50}\s?)\s?$/,
    boundary: /^(chapter)\s[0-9]{1,2}\s?$/,

    position: /^(after)?(before)?\s([a-z]{3,50})\s?([a-z]{3,50})?\s?([a-z]{3,50})?\s?([a-z]{3,50})?\s?([a-z]{3,50})?\s?([a-z]{3,50})?\s?([a-z]{3,50})?\s?$/,
    length: /^[0-9]{1,3}m?s?h?\s?$/,

    identificationNumber: /[0-9]{2}\-[0-9]{4,10}\s[a-zA-Z]{1}\s[0-9]{2}/,
    address: /^[a-zA-Z0-9\s,'-]*$/,

    age: /^(?!(?:0|0\.0|0\.00)$)[+]?\d{1,2}/,
    gender: /^[a-zA-Z]{1}$/, 

    proficiency: /[a-zA-Z]{4,100}(,(\s)?[a-zA-Z]{4,100})*/,
    courseToTeach: /[a-zA-Z]{4,100}/,
    
    courseName: /^([a-zA-Z\s]{3,100})$/,
    courseLevel: /^([a-zA-Z\s]{3,100})$/,

    courseCode: /^([a-zA-Z]{1,3})([\d]{1,4})$/,
    courseDepartment:  /^([a-zA-Z\s]{3,100})$/,

    prerequisites: /[a-zA-Z\s]{3,50}(,(\s)?[a-zA-Z]{3,50})*/,
    description: /([\w\s,\.\?\!\""])+/,
    keywords: /([\w\s,\.\?\!\""])+/,
    hours: /^(?!(?:0|0\.0|0\.00)$)[+]?\d{1,3}/,

    tests: /^(?!(?:0|0\.0|0\.00)$)[+]?\d{1,2}/,
    assignments: /^(?!(?:0|0\.0|0\.00)$)[+]?\d{1,2}/,
    
    // chapter chronological number of listing
    chapterNumber: /^(?!(?:0|0\.0|0\.00)$)[+]?\d{1,2}/,
    // Chapter summary text
    chapterHead: /([\w\s,\.]){10,100}/,

    // lecture name
    nameOfLectureToUpload: /([a-zA-Z\s,]){10,100}/,

    // lecture Duration
    lectureDuration: /^(?!(?:0|0\.0|0\.00)$)[+]?\d{1,3}/
    
}

 // Placeholder : the placeholder text is used with the textbox component for its name and label attributes.
// the name attribute for the textbox is used to fetch the corresponding regex express from an object
// Problem : the placeholder attribute can be a two word description and the regex object accepts only one word, if the description has more than one word then join them
// together using camel casing.
// thus I have put another key, " regExId " that is different from the " placeholder " by camelCasing
// implemented in the master component on course and instructor registration


export const listItem = {
    schools: ["chipindura", "chindunduma", "queen elizabeth", "kutama boys", "wanganui", "dataserver", "chipadze"],
    form: ["1", "2", "3", "4","5", "6"],
    provinces: ["mashonaland west","mashonaland east", "matebeleland north", "matabeleland south", "mashonaland central", "manicaland", "midlands", "harare", "bulawayo", "masvingo"]
}

//  TODO: remove
export const courses = [
    {
        name: "chemistry101",
        percentage: "100"
    },
    {
        name: "mathematics101",
        percentage: "10"
    },
    {
        name: "chemistry101",
        percentage: "100"
    },
    {
        name: "mathematics101",
        percentage: "10"
    },
    {
        name: "chemistry101",
        percentage: "100"
    },
    {
        name: "mathematics101",
        percentage: "10"
    },
    {
        name: "chemistry101",
        percentage: "100"
    },
    {
        name: "mathematics101",
        percentage: "10"
    }
]

//  TODO: remove
export const pendingText = [
    {
        message:"physics assignment under review",
        results: true
    },
    {
        message:"mathematics 201 test results are ready",
        results: true
    },

    {
        message:"mathematics 201 test results are ready",
        results:false
    }
]

//  TODO: remove
export const notificationsText = [
    "Tatenda have posted the solution to your chemistry 101 question","Tatenda have posted the solution to your chemistry 101 question","Tatenda have posted the solution to your chemistry 101 question", "s.mukwati has sent you a question on mathematics 101","s.mukwati has sent you a question on mathematics 101"
]

export default regex;
// must strip the whitespaces at the end of all input before sending to the server
// password has no whitespace  allowed by default, lest they add it deliberately
const Database = require('./db')
const createProffy = require('./createProffy')


Database.then( async (db) => {
    //inserir dados
    proffyValue = {
        name: "Gabriel Filgueira",
        avatar:"https://",
        whatsapp:'389328473',
        bio:'eu sou bom'
    }

    classValue = {
        subject:1,
        cost:'40',
        //o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após o cadastrarmos a class
        {
            weekday:1,
            time_from: 720,
            time_to:1220
        },

        {
            weekday:0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db,{ proffyValue, classScheduleValues, classValue })
    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classses de um determinado professor
    //trazer junti os dados do professor
    const selectedClassesProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesProffys)

    //o horário que a pessoa  trabalha, por exemplo, é das 8h-18h
    //o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    //o time_to precisa acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"       
    `)

    console.log(selectClassesSchedules)
})
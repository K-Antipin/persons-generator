const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    patronymicJson: `{
        "count": 15,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Богданович",
            "id_3": "Валерьевич",
            "id_4": "Викторович",
            "id_5": "Иванович",
            "id_6": "Романович",
            "id_7": "Сергеевич",
            "id_8": "Максимович",
            "id_9": "Кириллович",
            "id_10": "Константинович",
            "id_11": "Валентинович",
            "id_12": "Владиславович",
            "id_13": "Вольфович",
            "id_14": "Георгиевич",
            "id_15": "Леонидович"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Алина",
            "id_3": "Вера",
            "id_4": "Надежда",
            "id_5": "Варвара",
            "id_6": "Елена",
            "id_7": "Ольга",
            "id_8": "Екатерина",
            "id_9": "Кристина",
            "id_10": "Наталья"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Инженер",
            "id_2": "Физик",
            "id_3": "Пожарный",
            "id_4": "Юрист",
            "id_5": "Плотник",
            "id_6": "Электрик",
            "id_7": "Кинолог",
            "id_8": "Охранник",
            "id_9": "Композитор",
            "id_10": "Полицейский"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Учительница",
            "id_3": "Стюардесса",
            "id_4": "Швея",
            "id_5": "Парикмахер",
            "id_6": "Переводчица",
            "id_7": "Связистка",
            "id_8": "Актриса",
            "id_9": "Певица",
            "id_10": "Закройщик"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) =>
        Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomDate: function () {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        let dateTimeFormat = new Intl.DateTimeFormat('ru-RU', options);
        return dateTimeFormat.format(
            new Date(
                this.randomIntNumber(1950, 2000),
                this.randomIntNumber(0, 11),
                this.randomIntNumber(1, 31)
            )
        );
    },

    getPerson: function () {
        this.person = {};
        this.person.gender =
            Math.floor(Math.random() * 2) == 1
                ? this.GENDER_MALE
                : this.GENDER_FEMALE;
        if (this.person.gender == 'Мужчина') {
            this.person.img = 'male.png';
            this.person.firstName = this.randomValue(this.firstNameMaleJson);
            this.person.surname = this.randomValue(this.surnameJson);
            this.person.patronymic = this.randomValue(this.patronymicJson);
            this.person.date = this.randomDate() + 'р.';
            this.person.professoin = this.randomValue(this.professionMaleJson);
        } else {
            this.person.img = 'female.png';
            this.person.firstName = this.randomValue(this.firstNameFemaleJson);
            this.person.surname = this.randomValue(this.surnameJson) + 'a';
            this.person.patronymic =
                this.randomValue(this.patronymicJson).slice(0, -2) + 'на';
            this.person.date = this.randomDate() + 'р.';
            this.person.professoin = this.randomValue(
                this.professionFemaleJson
            );
        }
        return this.person;
    },
};

const users = [
    {
        id: 1,
        firstName: 'Ariana',
        lastName: 'Grande',
        age: 28,
        imgSrc: 'https://img1.hochu.ua/uploads/e4/9f/dd/e49fddf0-c1ed-4940-bda5-64d3a706119f_360x300_fit.jpg', 
    },
    {
        id: 2,
        firstName: 'Alexey',
        lastName: 'Panin',
        age: 43,
        imgSrc: 'https://cdn2-2.olnl.net/2/1/ee27af31/14c0759b/84da632c/76fd8036.jpg', 
    },
    {
        id: 3,
        firstName: 'Al',
        lastName: 'Pachino',
        age: 81,
        imgSrc: 'https://images11.cosmopolitan.ru/upload/img_cache/d1e/d1e59b8c9a96496c6375ca80119b601b_cropped_666x441.jpg', 
    },
    {
        id: 4,
        firstName: 'Klava',
        lastName: 'Koka',
        age: 24,
        imgSrc: 'https://www.spletnik.ru/img/2020/07/nadja/20200724-coca-post.JPG', 
    },
    {
        id: 5,
        firstName: 'Kelly',
        lastName: 'Brook',
        age: 41,
        imgSrc: 'https://i.pinimg.com/originals/77/ed/ac/77edac30e300613f3c4feabc5e43023b.jpg', 
    },
    {
        id: 6,
        firstName: 'Pavlo',
        lastName: 'Zibrov',
        age: 64,
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ojvyNf71bm_bj52zrR3JxI2Y9D-CamKALArDydqRdJ2kewXLUe2wuY4fGCFgGKhK9FM&usqp=CAU', 
    },
    {
        id: 7,
        firstName: 'Tom',
        lastName: 'Hardy',
        age: 43,
        imgSrc: 'https://www.goldenglobes.com/sites/default/files/styles/homepage_carousel/public/articles/cover_images/gettyimages-813948670.jpg?format=pjpg&auto=webp&optimize=high', 
    },
    {
        id: 8,
        firstName: 'Elizabeth',
        lastName: 'Mary',
        age: 95,
        imgSrc: 'https://newizv.ru/attachments/903b20e783f1f681867b9061377b68cfdb0bfd5f/store/fill/360/200/74aff931c6fa394872ab92b8f2175828fdf25da19b774ffec9261e847357/255416124_209754.jpg', 
    },
];

const dbUsers = users.map(user => ({...user, likesCount: 0, 
    imgThumbUp: 'data:image/png;base64,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',
    bin: 'http://pngimg.com/uploads/trash_can/trash_can_PNG18449.png',
    heart: 'https://img.icons8.com/emoji/256/red-heart.png'}
));

export default dbUsers;
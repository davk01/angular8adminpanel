import { Injectable } from '@angular/core';
export interface Post {
  title: string
  text: string
  id: number
  data: any
  image: any
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [ 
    {
    "id": 0,
    "title": "Ամենից շատ գործածվող լեզուները աշխարհում",
    "text": "Որո՞նք են աշխարհում ամենից շատ օգտագործվող լեզուները: Այս հարցը հուզում ու հետաքրքրում է շատերին: Դրանից ելնելով ենք որոշում, թե ո՞ր լեզվին արժի տիրապետել, և մենք, մեծամասամբ, նախապատվությունը տալիս ենք այն լեզուներին, որոնք կիրառվում և օգտագործվում են ամենից շատ և ունեն առավել մեծ պահանջարկ աշխարհի տարբեր կետերում: Գուցե առաջին հայացքից այս հարցը թվում է պարզ, բայց դա ամենևին էլ այդպես չէ: Երբեմն լեզվի գործածությունը կախված է ոչ միայն տարբեր երկրներում դրանց կիրառելիությունից, այլ նաև այն փաստից, թե որքա՞ն բնակչություն ունի տվյալ երկիրը, և որքանո՞վ է այդ երկրի լեզուն պահանջված: Մենք առանձնացրել ենք այն 5 հիմնական լեզուները, որոնք առավել կիրառելի են և առավել պահանջված: 1. Չինարեն Գուցե չինարենը կիրառվում է մեծամասամբ հենց Չինաստանում և ոչ այնքան բազմազան երկրներում, սակայն աշխարհում ամենից շատ խոսում են հենց այս լեզվով: Ինչու՞, որովհետև երկրի բնակչությունից ելնելով այս լեզուն կիրառվում է ավելի քան 1,9 միլյարդ մարդկանց կողմից, ընդ որում՝ 897 միլիոնը հենց միայն բնիկներն են: Որքան էլ այն թվա չափազանց բարդ և Ավելին",
    "data": "27 Dec 2018",
    "image": "https://kos.am/wp-content/uploads/2018/12/1920x1080-white-solid-color-background-2.jpg"
},
{
  "id": 1,
  "title": "Ամենից շատ գործածվող լեզուները աշխարհում",
  "text": "Որո՞նք են աշխարհում ամենից շատ օգտագործվող լեզուները: Այս հարցը հուզում ու հետաքրքրում է շատերին: Դրանից ելնելով ենք որոշում, թե ո՞ր լեզվին արժի տիրապետել, և մենք, մեծամասամբ, նախապատվությունը տալիս ենք այն լեզուներին, որոնք կիրառվում և օգտագործվում են ամենից շատ և ունեն առավել մեծ պահանջարկ աշխարհի տարբեր կետերում: Գուցե առաջին հայացքից այս հարցը թվում է պարզ, բայց դա ամենևին էլ այդպես չէ: Երբեմն լեզվի գործածությունը կախված է ոչ միայն տարբեր երկրներում դրանց կիրառելիությունից, այլ նաև այն փաստից, թե որքա՞ն բնակչություն ունի տվյալ երկիրը, և որքանո՞վ է այդ երկրի լեզուն պահանջված: Մենք առանձնացրել ենք այն 5 հիմնական լեզուները, որոնք առավել կիրառելի են և առավել պահանջված: 1. Չինարեն Գուցե չինարենը կիրառվում է մեծամասամբ հենց Չինաստանում և ոչ այնքան բազմազան երկրներում, սակայն աշխարհում ամենից շատ խոսում են հենց այս լեզվով: Ինչու՞, որովհետև երկրի բնակչությունից ելնելով այս լեզուն կիրառվում է ավելի քան 1,9 միլյարդ մարդկանց կողմից, ընդ որում՝ 897 միլիոնը հենց միայն բնիկներն են: Որքան էլ այն թվա չափազանց բարդ և Ավելին",
  "data": "27 Dec 2018",
  "image": "https://kos.am/wp-content/uploads/2018/12/1920x1080-white-solid-color-background-2.jpg"
},

{
  "id": 2,
  "title": "Ամենից շատ գործածվող լեզուները աշխարհում",
  "text": "Որո՞նք են աշխարհում ամենից շատ օգտագործվող լեզուները: Այս հարցը հուզում ու հետաքրքրում է շատերին: Դրանից ելնելով ենք որոշում, թե ո՞ր լեզվին արժի տիրապետել, և մենք, մեծամասամբ, նախապատվությունը տալիս ենք այն լեզուներին, որոնք կիրառվում և օգտագործվում են ամենից շատ և ունեն առավել մեծ պահանջարկ աշխարհի տարբեր կետերում: Գուցե առաջին հայացքից այս հարցը թվում է պարզ, բայց դա ամենևին էլ այդպես չէ: Երբեմն լեզվի գործածությունը կախված է ոչ միայն տարբեր երկրներում դրանց կիրառելիությունից, այլ նաև այն փաստից, թե որքա՞ն բնակչություն ունի տվյալ երկիրը, և որքանո՞վ է այդ երկրի լեզուն պահանջված: Մենք առանձնացրել ենք այն 5 հիմնական լեզուները, որոնք առավել կիրառելի են և առավել պահանջված: 1. Չինարեն Գուցե չինարենը կիրառվում է մեծամասամբ հենց Չինաստանում և ոչ այնքան բազմազան երկրներում, սակայն աշխարհում ամենից շատ խոսում են հենց այս լեզվով: Ինչու՞, որովհետև երկրի բնակչությունից ելնելով այս լեզուն կիրառվում է ավելի քան 1,9 միլյարդ մարդկանց կողմից, ընդ որում՝ 897 միլիոնը հենց միայն բնիկներն են: Որքան էլ այն թվա չափազանց բարդ և Ավելին",
  "data": "27 Dec 2018",
  "image": "https://kos.am/wp-content/uploads/2018/12/1920x1080-white-solid-color-background-2.jpg"
},
{
  "id": 3,
  "title": "Ամենից շատ գործածվող լեզուները աշխարհում",
  "text": "Որո՞նք են աշխարհում ամենից շատ օգտագործվող լեզուները: Այս հարցը հուզում ու հետաքրքրում է շատերին: Դրանից ելնելով ենք որոշում, թե ո՞ր լեզվին արժի տիրապետել, և մենք, մեծամասամբ, նախապատվությունը տալիս ենք այն լեզուներին, որոնք կիրառվում և օգտագործվում են ամենից շատ և ունեն առավել մեծ պահանջարկ աշխարհի տարբեր կետերում: Գուցե առաջին հայացքից այս հարցը թվում է պարզ, բայց դա ամենևին էլ այդպես չէ: Երբեմն լեզվի գործածությունը կախված է ոչ միայն տարբեր երկրներում դրանց կիրառելիությունից, այլ նաև այն փաստից, թե որքա՞ն բնակչություն ունի տվյալ երկիրը, և որքանո՞վ է այդ երկրի լեզուն պահանջված: Մենք առանձնացրել ենք այն 5 հիմնական լեզուները, որոնք առավել կիրառելի են և առավել պահանջված: 1. Չինարեն Գուցե չինարենը կիրառվում է մեծամասամբ հենց Չինաստանում և ոչ այնքան բազմազան երկրներում, սակայն աշխարհում ամենից շատ խոսում են հենց այս լեզվով: Ինչու՞, որովհետև երկրի բնակչությունից ելնելով այս լեզուն կիրառվում է ավելի քան 1,9 միլյարդ մարդկանց կողմից, ընդ որում՝ 897 միլիոնը հենց միայն բնիկներն են: Որքան էլ այն թվա չափազանց բարդ և Ավելին",
  "data": "27 Dec 2018",
  "image": "https://kos.am/wp-content/uploads/2018/12/1920x1080-white-solid-color-background-2.jpg"
},
{
  "id": 4,
  "title": "Ամենից շատ գործածվող լեզուները աշխարհում",
  "text": "Որո՞նք են աշխարհում ամենից շատ օգտագործվող լեզուները: Այս հարցը հուզում ու հետաքրքրում է շատերին: Դրանից ելնելով ենք որոշում, թե ո՞ր լեզվին արժի տիրապետել, և մենք, մեծամասամբ, նախապատվությունը տալիս ենք այն լեզուներին, որոնք կիրառվում և օգտագործվում են ամենից շատ և ունեն առավել մեծ պահանջարկ աշխարհի տարբեր կետերում: Գուցե առաջին հայացքից այս հարցը թվում է պարզ, բայց դա ամենևին էլ այդպես չէ: Երբեմն լեզվի գործածությունը կախված է ոչ միայն տարբեր երկրներում դրանց կիրառելիությունից, այլ նաև այն փաստից, թե որքա՞ն բնակչություն ունի տվյալ երկիրը, և որքանո՞վ է այդ երկրի լեզուն պահանջված: Մենք առանձնացրել ենք այն 5 հիմնական լեզուները, որոնք առավել կիրառելի են և առավել պահանջված: 1. Չինարեն Գուցե չինարենը կիրառվում է մեծամասամբ հենց Չինաստանում և ոչ այնքան բազմազան երկրներում, սակայն աշխարհում ամենից շատ խոսում են հենց այս լեզվով: Ինչու՞, որովհետև երկրի բնակչությունից ելնելով այս լեզուն կիրառվում է ավելի քան 1,9 միլյարդ մարդկանց կողմից, ընդ որում՝ 897 միլիոնը հենց միայն բնիկներն են: Որքան էլ այն թվա չափազանց բարդ և Ավելին",
  "data": "27 Dec 2018",
  "image": "https://kos.am/wp-content/uploads/2018/12/1920x1080-white-solid-color-background-2.jpg"
},
{
  "id": 5,
  "title": "Ամենից շատ գործածվող լեզուները աշխարհում",
  "text": "Որո՞նք են աշխարհում ամենից շատ օգտագործվող լեզուները: Այս հարցը հուզում ու հետաքրքրում է շատերին: Դրանից ելնելով ենք որոշում, թե ո՞ր լեզվին արժի տիրապետել, և մենք, մեծամասամբ, նախապատվությունը տալիս ենք այն լեզուներին, որոնք կիրառվում և օգտագործվում են ամենից շատ և ունեն առավել մեծ պահանջարկ աշխարհի տարբեր կետերում: Գուցե առաջին հայացքից այս հարցը թվում է պարզ, բայց դա ամենևին էլ այդպես չէ: Երբեմն լեզվի գործածությունը կախված է ոչ միայն տարբեր երկրներում դրանց կիրառելիությունից, այլ նաև այն փաստից, թե որքա՞ն բնակչություն ունի տվյալ երկիրը, և որքանո՞վ է այդ երկրի լեզուն պահանջված: Մենք առանձնացրել ենք այն 5 հիմնական լեզուները, որոնք առավել կիրառելի են և առավել պահանջված: 1. Չինարեն Գուցե չինարենը կիրառվում է մեծամասամբ հենց Չինաստանում և ոչ այնքան բազմազան երկրներում, սակայն աշխարհում ամենից շատ խոսում են հենց այս լեզվով: Ինչու՞, որովհետև երկրի բնակչությունից ելնելով այս լեզուն կիրառվում է ավելի քան 1,9 միլյարդ մարդկանց կողմից, ընդ որում՝ 897 միլիոնը հենց միայն բնիկներն են: Որքան էլ այն թվա չափազանց բարդ և Ավելին",
  "data": "27 Dec 2018",
  "image": "https://kos.am/wp-content/uploads/2018/12/1920x1080-white-solid-color-background-2.jpg"
},
{
  "id": 6,
  "title": "Ամենից շատ գործածվող լեզուները աշխարհում",
  "text": "Որո՞նք են աշխարհում ամենից շատ օգտագործվող լեզուները: Այս հարցը հուզում ու հետաքրքրում է շատերին: Դրանից ելնելով ենք որոշում, թե ո՞ր լեզվին արժի տիրապետել, և մենք, մեծամասամբ, նախապատվությունը տալիս ենք այն լեզուներին, որոնք կիրառվում և օգտագործվում են ամենից շատ և ունեն առավել մեծ պահանջարկ աշխարհի տարբեր կետերում: Գուցե առաջին հայացքից այս հարցը թվում է պարզ, բայց դա ամենևին էլ այդպես չէ: Երբեմն լեզվի գործածությունը կախված է ոչ միայն տարբեր երկրներում դրանց կիրառելիությունից, այլ նաև այն փաստից, թե որքա՞ն բնակչություն ունի տվյալ երկիրը, և որքանո՞վ է այդ երկրի լեզուն պահանջված: Մենք առանձնացրել ենք այն 5 հիմնական լեզուները, որոնք առավել կիրառելի են և առավել պահանջված: 1. Չինարեն Գուցե չինարենը կիրառվում է մեծամասամբ հենց Չինաստանում և ոչ այնքան բազմազան երկրներում, սակայն աշխարհում ամենից շատ խոսում են հենց այս լեզվով: Ինչու՞, որովհետև երկրի բնակչությունից ելնելով այս լեզուն կիրառվում է ավելի քան 1,9 միլյարդ մարդկանց կողմից, ընդ որում՝ 897 միլիոնը հենց միայն բնիկներն են: Որքան էլ այն թվա չափազանց բարդ և Ավելին",
  "data": "27 Dec 2018",
  "image": "https://kos.am/wp-content/uploads/2018/12/1920x1080-white-solid-color-background-2.jpg"
},
{
  "id": 7,
  "title": "Ամենից շատ գործածվող լեզուները աշխարհում",
  "text": "Որո՞նք են աշխարհում ամենից շատ օգտագործվող լեզուները: Այս հարցը հուզում ու հետաքրքրում է շատերին: Դրանից ելնելով ենք որոշում, թե ո՞ր լեզվին արժի տիրապետել, և մենք, մեծամասամբ, նախապատվությունը տալիս ենք այն լեզուներին, որոնք կիրառվում և օգտագործվում են ամենից շատ և ունեն առավել մեծ պահանջարկ աշխարհի տարբեր կետերում: Գուցե առաջին հայացքից այս հարցը թվում է պարզ, բայց դա ամենևին էլ այդպես չէ: Երբեմն լեզվի գործածությունը կախված է ոչ միայն տարբեր երկրներում դրանց կիրառելիությունից, այլ նաև այն փաստից, թե որքա՞ն բնակչություն ունի տվյալ երկիրը, և որքանո՞վ է այդ երկրի լեզուն պահանջված: Մենք առանձնացրել ենք այն 5 հիմնական լեզուները, որոնք առավել կիրառելի են և առավել պահանջված: 1. Չինարեն Գուցե չինարենը կիրառվում է մեծամասամբ հենց Չինաստանում և ոչ այնքան բազմազան երկրներում, սակայն աշխարհում ամենից շատ խոսում են հենց այս լեզվով: Ինչու՞, որովհետև երկրի բնակչությունից ելնելով այս լեզուն կիրառվում է ավելի քան 1,9 միլյարդ մարդկանց կողմից, ընդ որում՝ 897 միլիոնը հենց միայն բնիկներն են: Որքան էլ այն թվա չափազանց բարդ և Ավելին",
  "data": "27 Dec 2018",
  "image": "https://kos.am/wp-content/uploads/2018/12/1920x1080-white-solid-color-background-2.jpg"
},
]
  getById(id: number){
    return this.posts.find(p => p.id === +id)
  }
}

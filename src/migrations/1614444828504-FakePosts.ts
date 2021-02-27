import {MigrationInterface, QueryRunner} from "typeorm";

export class FakePosts1614444828504 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        insert into POST (title, text, "creatorId") values ('Bright Leaves', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
insert into POST (title, text, "creatorId") values ('Mike Birbiglia: What I Should Have Said Was Nothing', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1);
insert into POST (title, text, "creatorId") values ('Ashes, The (Popioly)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1);
insert into POST (title, text, "creatorId") values ('No Way to Treat a Lady', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1);
insert into POST (title, text, "creatorId") values ('Pursuit of D.B. Cooper, The (a.k.a. Pursuit)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1);
insert into POST (title, text, "creatorId") values ('Chori Chori Chupke Chupke', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1);
insert into POST (title, text, "creatorId") values ('The Disembodied', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
insert into POST (title, text, "creatorId") values ('Penguins of Madagascar', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
insert into POST (title, text, "creatorId") values ('Winter Break', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
insert into POST (title, text, "creatorId") values ('In the City (En la ciudad)', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
insert into POST (title, text, "creatorId") values ('Blow Out', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
insert into POST (title, text, "creatorId") values ('Asphalt Playground (La cité rose)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1);
insert into POST (title, text, "creatorId") values ('Shake Hands with the Devil', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
insert into POST (title, text, "creatorId") values ('Hysterical Blindness', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1);
insert into POST (title, text, "creatorId") values ('Russian Roulette', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
insert into POST (title, text, "creatorId") values ('Arthur Christmas', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1);
insert into POST (title, text, "creatorId") values ('Miracle of Morgan''s Creek, The', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1);
insert into POST (title, text, "creatorId") values ('Mr. Mom', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
insert into POST (title, text, "creatorId") values ('21 and Over', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
insert into POST (title, text, "creatorId") values ('Haxan: Witchcraft Through the Ages (a.k.a. The Witches)', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1);
insert into POST (title, text, "creatorId") values ('Pentagon Wars, The', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1);
insert into POST (title, text, "creatorId") values ('General, The', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1);
insert into POST (title, text, "creatorId") values ('Battle for Brooklyn', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
insert into POST (title, text, "creatorId") values ('Lemora: A Child''s Tale of the Supernatural', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
insert into POST (title, text, "creatorId") values ('Exterminating Angel, The (Ángel exterminador, El)', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1);
insert into POST (title, text, "creatorId") values ('Frownland', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
insert into POST (title, text, "creatorId") values ('Talking Funny', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1);
insert into POST (title, text, "creatorId") values ('Carrie', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
insert into POST (title, text, "creatorId") values ('Iron Maiden: Flight 666', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
insert into POST (title, text, "creatorId") values ('FernGully 2: The Magical Rescue', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1);
insert into POST (title, text, "creatorId") values ('Hooper', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1);
insert into POST (title, text, "creatorId") values ('Wild Guitar', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1);
insert into POST (title, text, "creatorId") values ('Dames du Bois de Boulogne, Les (Ladies of the Bois de Boulogne, The) (Ladies of the Park)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
insert into POST (title, text, "creatorId") values ('Cremaster 5', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1);
insert into POST (title, text, "creatorId") values ('The Suspended Step of the Stork', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
insert into POST (title, text, "creatorId") values ('Nemesis 3: Time Lapse', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
insert into POST (title, text, "creatorId") values ('End of the Affair, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1);
insert into POST (title, text, "creatorId") values ('Letter, The (La lettre)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
insert into POST (title, text, "creatorId") values ('Carrie', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
insert into POST (title, text, "creatorId") values ('Magnum Force', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1);
insert into POST (title, text, "creatorId") values ('13Hrs', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
insert into POST (title, text, "creatorId") values ('Tyler Perry''s I Can Do Bad All by Myself', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
insert into POST (title, text, "creatorId") values ('Pig''s Tale, A', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1);
insert into POST (title, text, "creatorId") values ('Sin City: A Dame to Kill For', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1);
insert into POST (title, text, "creatorId") values ('Mask of Zorro, The', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
insert into POST (title, text, "creatorId") values ('Pacific Heights', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1);
insert into POST (title, text, "creatorId") values ('Harper Valley P.T.A.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1);
insert into POST (title, text, "creatorId") values ('Silent Night, Bloody Night', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
insert into POST (title, text, "creatorId") values ('My Summer of Love', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1);
insert into POST (title, text, "creatorId") values ('Over Her Dead Body', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1);
insert into POST (title, text, "creatorId") values ('Wrong Rosary (Uzak ihtimal)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1);
insert into POST (title, text, "creatorId") values ('Valley of the Dolls', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1);
insert into POST (title, text, "creatorId") values ('Northerners, The (De noorderlingen)', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1);
insert into POST (title, text, "creatorId") values ('Hoot', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1);
insert into POST (title, text, "creatorId") values ('009 Re: Cyborg', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1);
insert into POST (title, text, "creatorId") values ('My Brilliant Career', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1);
insert into POST (title, text, "creatorId") values ('Screwed in Tallinn (Torsk på Tallinn - En liten film om ensamhet)', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1);
insert into POST (title, text, "creatorId") values ('Gus', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1);
insert into POST (title, text, "creatorId") values ('Vincent', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
insert into POST (title, text, "creatorId") values ('Blackbird', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1);
insert into POST (title, text, "creatorId") values ('Four Christmases', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1);
insert into POST (title, text, "creatorId") values ('Big Kahuna, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1);
insert into POST (title, text, "creatorId") values ('Jarhead 2: Field of Fire', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1);
insert into POST (title, text, "creatorId") values ('Shaft', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1);
insert into POST (title, text, "creatorId") values ('Ninja, A Band of Assassins (Shinobi No Mono)', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1);
insert into POST (title, text, "creatorId") values ('Rigor Mortis (Geung si)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1);
insert into POST (title, text, "creatorId") values ('Body/Cialo', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1);
insert into POST (title, text, "creatorId") values ('Mondo Trasho', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1);
insert into POST (title, text, "creatorId") values ('Three Kingdoms: Resurrection of the Dragon (Saam gwok dzi gin lung se gap)', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1);
insert into POST (title, text, "creatorId") values ('Confession', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1);
insert into POST (title, text, "creatorId") values ('Wicked', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1);
insert into POST (title, text, "creatorId") values ('Chain Camera', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1);
insert into POST (title, text, "creatorId") values ('Ruins', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1);
insert into POST (title, text, "creatorId") values ('Jericho Mile, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1);
insert into POST (title, text, "creatorId") values ('The Night That Panicked America', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1);
insert into POST (title, text, "creatorId") values ('Seven Brothers (Seitsemän veljestä)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
insert into POST (title, text, "creatorId") values ('Kings Row', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
insert into POST (title, text, "creatorId") values ('Lady in Number 6: Music Saved My Life, The', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
insert into POST (title, text, "creatorId") values ('9500 Liberty', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1);
insert into POST (title, text, "creatorId") values ('Civic Duty', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1);
insert into POST (title, text, "creatorId") values ('American, The', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1);
insert into POST (title, text, "creatorId") values ('Hotel Rwanda', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1);
insert into POST (title, text, "creatorId") values ('Haiku Tunnel', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1);
insert into POST (title, text, "creatorId") values ('Fanboys', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1);
insert into POST (title, text, "creatorId") values ('Bronx Obama', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1);
insert into POST (title, text, "creatorId") values ('Fail Safe', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
insert into POST (title, text, "creatorId") values ('Book of Stars, The', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1);
insert into POST (title, text, "creatorId") values ('Lantana', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1);
insert into POST (title, text, "creatorId") values ('Bride of Chucky (Child''s Play 4)', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1);
insert into POST (title, text, "creatorId") values ('Battle Circus', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1);
insert into POST (title, text, "creatorId") values ('Kapò', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1);
insert into POST (title, text, "creatorId") values ('Uninvited, The', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1);
insert into POST (title, text, "creatorId") values ('Texas Chainsaw 3D', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
insert into POST (title, text, "creatorId") values ('Very Brady Sequel, A', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
insert into POST (title, text, "creatorId") values ('Secret Sunshine (Milyang)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1);
insert into POST (title, text, "creatorId") values ('Girl with the Dragon Tattoo, The (Män som hatar kvinnor)', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1);
insert into POST (title, text, "creatorId") values ('Suburban Commando', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1);
insert into POST (title, text, "creatorId") values ('Train Robbers, The', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1);
insert into POST (title, text, "creatorId") values ('Mudge Boy, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1);
insert into POST (title, text, "creatorId") values ('I Want to Look Like That Guy', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1);`);
    }

    public async down(_: QueryRunner): Promise<void> {
        return;
    }

}

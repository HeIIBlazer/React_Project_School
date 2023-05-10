-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 10 2023 г., 08:13
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `react_school`
--

-- --------------------------------------------------------

--
-- Структура таблицы `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `departments`
--

INSERT INTO `departments` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'IT ja Majandus', '2023-04-26', '2023-04-26'),
(2, 'Teenindus ja Toitlustus', '2023-04-26', '2023-04-26'),
(3, 'Metall ja Auto', '2023-04-26', '2023-04-26'),
(4, 'Üldõpe, Kutsevalik', '2023-04-26', '2023-04-26');

-- --------------------------------------------------------

--
-- Структура таблицы `professions`
--

CREATE TABLE `professions` (
  `id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 NOT NULL,
  `duration` float NOT NULL,
  `education` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `poster` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `professions`
--

INSERT INTO `professions` (`id`, `department_id`, `name`, `duration`, `education`, `description`, `poster`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Tarkvaraarendaja', 4, 'Põhiharidus', 'Tarkvaraarendaja põhiliseks tööks on tarkvara lähtekoodi kirjutamine vastavalt kokkulepitud disainile. Ta osaleb tarkvara lahenduse väljatöötamisel, vastutab kirjutatud koodi tehnilise kasutamise eest ja pakub erinevaid lahendusi, arvestades süsteemi kui tervikut. Tarkvaraarendaja suudab oma tööd iseseisvalt organiseerida, aega planeerida ning vastutust võtta. Ta täidab tööülesandeid muutuvates olukordades nõuetekohaselt, on hea kaasamõtleja ning lahenduste otsija. Tarkvaraarendaja on hea meeskonnaliige, mõistab ja rakendab meeskonnas kasutatavat tarkvara arenduse metoodikat.', 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600', '2023-04-26', '2023-04-26'),
(2, 2, 'Tisler', 3, 'Põhiharidus', 'Tisler on oskustööline kes, kasutades käsitööriistu ja puidutöötlemise masinaid, oskab  valmistada, remontida ja dekoreerida puidust mööblit ning mööbli puitosi. Valmistab  puidust aknaid, uksi ning treppe. Tisler seadistab puidutöötlemismasinaid vastavalt töödeldava detaili kujule ja mõõtmetele ning sooritab tööoperatsioone nendel masinatel, oskab lugeda tööjooniseid. Tisler oskab korraldada enda tööd ja tuleb toime tööaja planeerimisega, väärtustab valitud kutset ja eriala. Tisleritööd iseloomustab pigem iseseisev tegutsemine, mis nõuab oskust oma tegevust kavandada. Tisleritöö võib olla samal ajal nii loominguline kui ka rutiinne. Ühelt poolt võib tisler töötada disainitud ainueksemplaridega, mis eeldavad loomingulist lähenemist, teiselt poolt tuleb täita rutiinsemaid ülesandeid, näiteks seeriatoodangu puhul sarnaste puitdetailide valmistamist.', 'https://images.pexels.com/photos/5973969/pexels-photo-5973969.jpeg?auto=compress&cs=tinysrgb&w=600', '2023-04-26', '2023-04-26'),
(3, 2, 'Kokk', 3, 'Põhiharidus', 'Kokk valmistab erinevaid roogasid ja jooke, kasutades uusi kulinaarseid tehnikaid ja kaasaegseid seadmeid. Korraldab enda tööd ratsionaalselt. Oskab töötada nii individuaalselt kui ka meeskonnas. Serveerib toite vastavalt klientide vajadustele ja soovidele. Samuti nõuab koka amet pideva seismise ja liikumise tõttu head füüsilist vormi.', 'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=600', '2023-04-26', '2023-04-26'),
(4, 2, 'Juuksur', 3, 'Keskharidus', 'Juuksuri amet on nii töö kui hobi inimesele, kes oma tööd armastab. Juuksur on loov isik, kelle töö on luua uusi trende juuste lõikamises, värvimises ning soengute kujundamise kaudu. Juuksur tunneb juuksekosmeetikavahendeid ja nende mõju erinevatele juuksetüüpidele ning on kursis moesuundadega. Juuksur nõustab klienti ja oskab müüa kliendile sobivaimaid juuksehooldus- ja viimistlusvahendeid. Tulevane juuksur õpib tegema kõiki vajalikke töid, mida see amet eeldab: head suhtlust, enesekindlust ja soovi töötada klientidega. Peale kooli lõpetamist võib juuksur asuda tööle salongi või hakata ettevõtjaks ja luua oma salong.', 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600', '2023-04-26', '2023-04-26'),
(5, 3, 'Mootorsõidukitehnik', 2, 'Põhiharidus', 'Mootorsõidukitehnik diagnoosib, hooldab ja remondib erinevaid mootorsõidukeid vastavalt remondi- ja hooldusjuhistele ning tehnilistele joonistele, vastutab oma töö tulemuste eest. Töötamisel järgib keskkonnasäästlikke töövõtteid, tööohutuse  ja  töötervishoiu nõudeid ning kasutab materjale säästlikult.  Töös on olulised koostöö ja osalemine  meeskonnatöös  ning oma pädevuse piires teiste töötajate juhendamine.  Mootorsõidukitehnik käitub  vastastikust suhtlemist toetaval viisil, kasutab infotehnoloogilisi vahendeid. Mootorsõidukitehniku töö eeldab tehniliste jooniste ja skeemide lugemise oskust ning kataloogide jt. juhendmaterjalide kasutamist. Seoses kiiresti uueneva tehnoloogiaga on vajalik pidev enesetäiendamine. Kutseõppe valikained laiendavad erialaseid kompetentse ja suurendavad kutseõppe lõpetaja konkurentsivõimet tööturul. Valikainete kaudu on võimalik arendada  võõrkeeleoskust, IKT alaseid kompetentse, omandada keevituse- ja tuletöö teadmised jne.', 'https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&w=600', '2023-04-26', '2023-04-26'),
(6, 4, 'Kutsevaliku õpe', 1, 'Haridusnõudeta', 'Ida-Virumaa Kutsehariduskeskuse kutsevalikuõppe õppekava eesmärk on, et õppija omandab teadmised, oskused ja hoiakud ning sotsiaalse valmiduse sobiva eriala valimiseks kutseõppes, õpingute jätkamiseks ja/või tööturule siirdumiseks. Väga olulisel kohal õppes on karjääri kujundamise oskuste arendamine, mille tulemusena suureneb suutlikkus teha enesekohaselt teadlik eriala, õppevormi ja -koha valik või asuda tööle. Õppekava sisaldab praktiliste oskuste, sotsiaalsete oskuste, üldpädevuste ja võtmepädevuste ning ülekantavate oskuste arendamist. Kutsevaliku õppe raames pakutakse õpilastele suurendatud individuaalset tuge, seda eelkõige lähtudes hariduslikust erivajadusest. Õppija omandab kutseharidusstandardis kirjeldatud 2. taseme õppe õpiväljundid (kirjeldatud kutsevalikuõppe õppekavas).', 'https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=600', '2023-04-26', '2023-04-26'),
(7, 3, 'Automaatik', 3, 'Põhiharidus', 'Automaatikud on oskustöötajad, kelle põhitegevus on automaatikasüsteemide, -komponentide ja –seadmete paigaldamine ja käitamine. Tootmisautomaatika ettevõtetes kasutavad nad elektro-, pneumo- ja/või hüdroautomaatika vahendeid, ehitusautomaatika ettevõtetes spetsiifilist seadmestikku ja aparatuuri.', 'https://images.pexels.com/photos/132700/pexels-photo-132700.jpeg?auto=compress&cs=tinysrgb&w=600', '2023-04-26', '2023-04-26'),
(8, 1, 'Laotöötaja', 3, 'Keskharidus', 'Laotöötajate töö eesmärk on tagada logistilises ahelas materjalide ja kaupade optimaalsete koguste ajutine hoiustamine ning lisaväärtusteenuste osutamine 4. taseme laotöötaja ülesandeks on:kaupade vastuvõtmine, hoiustamine, väljastamine\r\nväljastustellimuse komplekteerimine markeerimine jm lisaväärtustoimingute tegemine kaupade inventeerimine klientide teenindamine laos töö laoinfosüsteemis (laotarkvara kasutamine, töö skänneritega, kontoritehnikaga) Kaupade teisaldamiseks on vajalik läbida laotõstukite ja muude laoseadmete kasutamise väljaõpe. Laotöötaja töötab iseseisvalt ja meeskonnas. Laotöötaja vastutab laoga seotud varade säilimise ja heaperemeheliku kasutamise eest. Laotöötaja tervikkutse sisaldab \"Kauba käitleja\" osakutset, mis seondub terminalitöö ning jaotus- ja korjevedudega ja hõlmab kauba käitlemist saadetiste tasemel.', 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600', '2023-04-26', '2023-04-26');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', 'admin@ee.ee', '$2b$10$YK.LalXd9uyeSV96rqO/cumZqeFn.UyKF/xRp.Ni9fGmOhRd99QPe', 'admin', NULL, '2023-04-08 08:30:25', '2023-04-15 06:01:06'),
(2, 'Pupil', 'pupil@ee.ee', '$2b$10$/9CeDjzbI9oi5T5rN4Djrem2XV/OG4B91VhXN3G5MEF1Nigsxz./O', 'user', NULL, '2023-04-14 05:20:30', '2023-04-15 05:22:50');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `professions`
--
ALTER TABLE `professions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_department_id` (`department_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `professions`
--
ALTER TABLE `professions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `professions`
--
ALTER TABLE `professions`
  ADD CONSTRAINT `profession_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

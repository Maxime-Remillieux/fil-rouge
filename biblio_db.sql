-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 25 jan. 2022 à 00:55
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `biblio_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `author`
--
--
-- Déchargement des données de la table `author`
--

INSERT INTO `author` (`id`, `name`, `firstname`) VALUES
(1, 'Hugo', 'Victor'),
(2, 'Camus', 'Albert'),
(3, 'De Saint Exupéry', 'Antoine'),
(4, 'Zola', 'Émile'),
(5, 'De Balzac', 'Honoré'),
(6, 'Baudelaire', 'Charles'),
(7, 'fghdgjf', 'gfjsfgjs');

-- --------------------------------------------------------

--
-- Structure de la table `book`
--

--
-- Déchargement des données de la table `book`
--

INSERT INTO `book` (`id`, `author_id`, `publisher_id`, `collection_id`, `code`, `title`, `release_at`, `added_at`, `img`, `resume`) VALUES
(1, 1, 1, 1, 'FLAMCOL865', 'Les Misérables', '2012-01-03 16:27:05', '2022-01-05 16:27:05', '9782253096337-001-T.jpeg', 'Jean Valjean a été condamné au bagne en 1795 pour le vol d\'un pain, jugement qui symbolise l\'oppression qu\'impose une société injuste à une population écrasée ; L\'Inspecteur Javert, policier, incarne l\'intransigeance de la société bourgeoise. Pas de rémission pour un ancien forçat, pas de grâce pour Valjean.'),
(2, 2, 1, 2, 'FLAMCOL451', 'La Peste', '2013-02-08 16:27:05', '2021-12-02 16:27:05', 'La-Peste.jpg', 'L’histoire se déroule dans les années 1940. Elle a pour théâtre Oran durant la période de l’Algérie française.\n\nLe roman raconte sous forme de chronique la vie quotidienne des habitants pendant une épidémie de peste qui frappe la ville et la coupe du monde extérieur. Camus semble s\'être documenté sur une petite épidémie de peste bubonique, survenue à Oran en 1945, succédant à une épidémie plus sérieuse qui avait eu lieu à Alger en 1944, mais son projet est antérieur à l\'apparition de ces épidémies, puisqu\'il y réfléchit depuis avril 1941, comme en témoignent ses Carnets, où il parle de « la peste libératrice » et note quelques idées.'),
(3, 6, 2, 3, 'HACCOL412', 'Les Fleurs du Mal', '2015-04-03 16:45:15', '2021-11-05 16:45:15', 'Les-fleurs-du-mal.jpg', 'C\'est une œuvre majeure de la poésie moderne. Ses 168 pièces rompent avec le \"style convenu\" en usage jusqu\'alors. Elle rajeunit la structure du vers par l\'usage régulier d\'enjambements, de rejets et de contre-rejets. Elle rénove la forme rigide du sonnet.'),
(4, 1, 2, 4, 'HACCOL045', 'Notre Dame de Paris', '2019-05-02 16:45:15', '2021-09-02 16:45:15', '61c5b1c9b79f8.jpg', 'blablabla'),
(5, 3, 3, 5, 'GALCOL512', 'Le Petit Prince', '2016-08-05 16:49:00', '2022-01-05 16:49:00', '719fXxqahzL.jpg', 'Le narrateur est un aviateur qui, à la suite d\'une panne de moteur, a dû se poser en catastrophe dans le désert du Sahara et tente seul de réparer son avion (Antoine de Saint-Exupéry se met en scène lui-même dans son œuvre).\r\n\r\nLe lendemain de son atterrissage forcé, il est réveillé par une petite voix qui lui demande : « S\'il vous plaît… dessine-moi un mouton ! » '),
(6, 5, 3, 6, 'GALCOL064', 'Le père Goriot', '2015-05-07 16:49:00', '2020-06-10 16:49:00', 'pile-de-livres.jpg', 'Résumé blablabla');

-- --------------------------------------------------------


-- Déchargement des données de la table `book_theme`
--

INSERT INTO `book_theme` (`book_id`, `theme_id`) VALUES
(1, 4),
(1, 6),
(2, 4),
(2, 10),
(3, 5),
(3, 11),
(4, 14),
(5, 13),
(6, 7),
(6, 8);

-- --------------------------------------------------------

--
-- Structure de la table `collec`
--
--
-- Déchargement des données de la table `collec`
--

INSERT INTO `collec` (`id`, `publisher_id`, `name`) VALUES
(1, 1, 'Col 1'),
(2, 1, 'Col 2'),
(3, 2, 'Col 3'),
(4, 2, 'Col 4'),
(5, 3, 'Col 5'),
(6, 3, 'Col6'),
(7, 4, 'Col 7'),
(8, 4, 'Col 8'),
(9, 5, 'gsfjsfgj');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--


-- --------------------------------------------------------

--
-- Structure de la table `loan`
--

-- --------------------------------------------------------

--
-- Structure de la table `publisher`
--


-- Déchargement des données de la table `publisher`
--

INSERT INTO `publisher` (`id`, `name`) VALUES
(1, 'Flammarion'),
(2, 'Hachette'),
(3, 'Gallimard'),
(4, 'Albin Michel'),
(5, 'gfjsgfj');

-- --------------------------------------------------------

--
-- Structure de la table `theme`
--


--
-- Déchargement des données de la table `theme`
--

INSERT INTO `theme` (`id`, `name`) VALUES
(4, 'Roman'),
(5, 'Educatif'),
(6, 'Science-Fiction'),
(7, 'Arts'),
(8, 'Cinéma'),
(9, 'Musique'),
(10, 'Histoire'),
(11, 'Géographie'),
(12, 'Nouvelle'),
(13, 'Encyclopédie'),
(14, 'Poésie'),
(21, 'NouveauTheme');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--


--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `code`, `name`, `firstname`, `adress`, `post_code`, `city`, `phone`, `registered_at`) VALUES
(1, 'admin@gmail.com', '[\"ROLE_ADMIN\"]', '$2y$13$Q4urWwkB9MMaVWs0mB2heOGPU77cy4k6fKpW/DOsvftm76hPO5OeK', 'REMMAX001', 'Rem', 'Max', '13 avenue Gambetta', '94600', 'Choisy-le-Roi', '0625559302', '2022-01-20 16:42:39'),
(2, 'client@gmail.com', '[\"ROLE_USER\"]', '$2y$13$rTf0ui4g3cGr0N2iSg2AiuNfUB6pm0O.lnLjrRsFt0MXuya8vniLu', 'BONJEA666', 'Bon', 'Jean', '25 rue du Général de Gaulle', '78000', 'Versailles', '0698574125', '2022-01-21 20:09:06'),
(3, 'drydy@gmail.com', '[\"ROLE_USER\"]', '$2y$10$pcvunOYFw1lDmgs4UrCrtOPR5EdsgjIzevi2cSlxjlCKNeXLc9HUi', 'DHDGJD', 'dhdfgh', 'gjdjgdjg', 'dfgjdf', '45896', 'udyktdk', '0698547852', '2022-01-23 14:36:56'),
(4, 'boby@bob.com', '[\"ROLE_USER\"]', '$2y$10$3M7JonZh9TYpud.4oigizOXmFK7fJi.sHOe7yqIdxVtEZvQeZgUrW', 'BOBBOB', 'testName', 'testFName', '13 avenue Gambetta', '94600', 'Choisy-le-Roi', '0638965425', '2022-01-23 15:08:48'),
(6, 'boby@boby.com', '[\"ROLE_USER\"]', '$2y$10$AiQ77Jq7symSjQDbPE28NOCJigGRsbs7U.VebHUGzVQVeHF5N1euO', 'BOBBOB679', 'testName', 'testFName', '13 avenue Gambetta', '94600', 'Choisy-le-Roi', '0638965425', '2022-01-23 15:19:11'),
(7, 'gdqgsd@gmail.com', '[\"ROLE_USER\"]', '$2y$10$HZgZMR8hss51mz10N0XvTuG50GLbps.wwB4.53K3Xy7vaSgOKfoMW', 'TGZDFB295', 'tgzgdb', 'dfbhdfbsd', 'sdfnsdfnd', '98541', 'dsgsdgq', '0685965412', '2022-01-23 15:22:07'),
(9, 'gdq@gmail.com', '[\"ROLE_USER\"]', '$2y$10$XEgN12.2KZvnI7x4f0AVX.BA3KLUMeZvsT4OS2lWKB9IV7F1VB6Aa', 'TGZDFB191', 'tgzgdb', 'dfbhdfbsd', 'sdfnsdfnd', '98541', 'dsgsdgq', '0685965412', '2022-01-23 15:26:41'),
(12, 'toto@gmail.com', '[\"ROLE_USER\"]', '$2y$10$3QiSvtQAp8Xgm0AHild0FuIyXpy64HR.vvk7XrAisGJfHFaX1Qnuy', 'SDVGQS286', 'sdvqsdvqsd', 'gqsdfgdfg', '23 rue dslsqdblsd', '94600', 'qdsfdfsqdf', '06258474589', '2022-01-24 11:49:59'),
(13, 'kdslkgh@gmail.com', '[\"ROLE_PROF\"]', '$2y$10$yTrfNbZMcNPxQ6lBKx2DeeXZ.I5lbFaNt5D.Ltd33LwBeB6wXK9Qe', 'DFBSDV892', 'dfbvdcbvqsd', 'sdvqsdvqs', 'dsvqsd rue SDVSDV', '78456', 'VSDVSDV', '0632589654', '2022-01-24 11:56:09');

--
--
-- Contraintes pour les tables déchargées
--

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

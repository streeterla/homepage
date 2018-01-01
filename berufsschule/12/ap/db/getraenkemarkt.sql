-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 09. Januar 2011 um 21:30
-- Server Version: 5.1.41
-- PHP-Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `getraenkemarkt`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Behaeltnis`
--

CREATE TABLE IF NOT EXISTS `Behaeltnis` (
  `id` int(11) NOT NULL DEFAULT '0',
  `material` varchar(20) DEFAULT NULL,
  `fuellmenge` double DEFAULT NULL,
  `pfand` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Behaeltnis`
--

INSERT INTO `Behaeltnis` (`id`, `material`, `fuellmenge`, `pfand`) VALUES
(1, 'Glas', 1, 0.25),
(2, 'Glas', 0.5, 0.25),
(3, 'Glas', 0.33, 0.25),
(4, 'Plastik', 0.33, 0.5),
(5, 'Plastik', 0.5, 0.5),
(6, 'Plastik', 1, 0.5),
(7, 'Plastik', 2, 0.5),
(8, 'Tetrapack', 2, 0.5),
(9, 'Tetrapack', 1, 0.5),
(10, 'Tetrapack', 0.5, 0.5),
(11, 'Tetrapack', 0.2, 0.5);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Getraenk`
--

CREATE TABLE IF NOT EXISTS `Getraenk` (
  `id` int(11) NOT NULL DEFAULT '0',
  `letzteLieferung` date DEFAULT NULL,
  `naechsteLieferung` date DEFAULT NULL,
  `Getraenketyp_ID` int(11) DEFAULT NULL,
  `Preis` double DEFAULT NULL,
  `Name` varchar(20) DEFAULT NULL,
  `Lagerbestand` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Getraenketyp_ID` (`Getraenketyp_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Getraenk`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Getraenketyp`
--

CREATE TABLE IF NOT EXISTS `Getraenketyp` (
  `id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Getraenketyp`
--

INSERT INTO `Getraenketyp` (`id`, `name`) VALUES
(1, 'Wasser'),
(2, 'Limonade Gelb'),
(3, 'Limonade Weiss'),
(4, 'Helles Bier'),
(5, 'Dunkles Bier'),
(6, 'Weissbier'),
(7, 'Cola'),
(8, 'Spezi'),
(9, 'Saft');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hat_bekommen`
--

CREATE TABLE IF NOT EXISTS `hat_bekommen` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Datum` date DEFAULT NULL,
  `Kunde_ID` int(11) DEFAULT NULL,
  `Werbegeschenk_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Kunde_ID` (`Kunde_ID`),
  KEY `Werbegeschenk_ID` (`Werbegeschenk_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `hat_bekommen`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Hersteller`
--

CREATE TABLE IF NOT EXISTS `Hersteller` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Umsatz` double DEFAULT NULL,
  `Name` varchar(20) DEFAULT NULL,
  `Strasse` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Hersteller`
--

INSERT INTO `Hersteller` (`id`, `Umsatz`, `Name`, `Strasse`) VALUES
(1, 1000, 'Stoettner', 'Marktplatz 9'),
(2, 1000, 'Wittmann', 'Laendgasse 50'),
(3, 1000, 'Hohenthanner', 'Brauhausstrasse 1'),
(4, 1000, 'Innstadt', 'Schmiedgasse 23'),
(5, 1000, 'Hacklberg', 'Braeuhausplatz 3'),
(6, 1000, 'Schneider', 'Tal 7'),
(7, 1000, 'Loewenbraeu', 'Nymphenburger Strass'),
(8, 1000, 'Augustiner', 'Landsberger Strasse ');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ist_in`
--

CREATE TABLE IF NOT EXISTS `ist_in` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Lieferant_ID` int(11) DEFAULT NULL,
  `Ort_PLZ` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Lieferant_ID` (`Lieferant_ID`),
  KEY `Ort_PLZ` (`Ort_PLZ`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `ist_in`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ist_in_b`
--

CREATE TABLE IF NOT EXISTS `ist_in_b` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Behaeltnis_ID` int(11) DEFAULT NULL,
  `Getraenk_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Behaeltnis_ID` (`Behaeltnis_ID`),
  KEY `Getraenk_ID` (`Getraenk_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `ist_in_b`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ist_in_v`
--

CREATE TABLE IF NOT EXISTS `ist_in_v` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Verpackung_ID` int(11) DEFAULT NULL,
  `Getraenk_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Verpackung_ID` (`Verpackung_ID`),
  KEY `Getraenk_ID` (`Getraenk_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `ist_in_v`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kauft`
--

CREATE TABLE IF NOT EXISTS `kauft` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Kunde_ID` int(11) DEFAULT NULL,
  `Getraenk_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Kunde_ID` (`Kunde_ID`),
  KEY `Getraenk_ID` (`Getraenk_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `kauft`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Kunde`
--

CREATE TABLE IF NOT EXISTS `Kunde` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Vorname` varchar(20) DEFAULT NULL,
  `Nachname` varchar(20) DEFAULT NULL,
  `Grosskunde` tinyint(1) DEFAULT NULL,
  `Stammkunde` tinyint(1) DEFAULT NULL,
  `Entfernung` double DEFAULT NULL,
  `Lieblingsgetraenk` int(11) DEFAULT NULL,
  `GebDatum` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Lieblingsgetraenk` (`Lieblingsgetraenk`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Kunde`
--

INSERT INTO `Kunde` (`id`, `Vorname`, `Nachname`, `Grosskunde`, `Stammkunde`, `Entfernung`, `Lieblingsgetraenk`, `GebDatum`) VALUES
(1, 'Martin', 'Strasser', 1, 1, 25, 0, '1986-04-15'),
(2, 'Monika', 'Attenberger', 0, 0, 100, 0, '1989-03-20'),
(3, 'Jonathan', 'Schneider', 0, 0, 50, 0, '1991-08-21');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Lieferant`
--

CREATE TABLE IF NOT EXISTS `Lieferant` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Name` varchar(20) DEFAULT NULL,
  `Strasse` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Lieferant`
--

INSERT INTO `Lieferant` (`id`, `Name`, `Strasse`) VALUES
(1, 'Hans', 'Erste Strasse 1'),
(2, 'Sepp', 'Zweite Strasse 2'),
(3, 'Dieter', 'Dritte Strasse 3'),
(4, 'Stumpfdepp', 'Glasergasse 3');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `liefert`
--

CREATE TABLE IF NOT EXISTS `liefert` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Getraenk_ID` int(11) DEFAULT NULL,
  `Lieferant_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Getraenk_ID` (`Getraenk_ID`),
  KEY `Lieferant_ID` (`Lieferant_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `liefert`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `liefert_mit`
--

CREATE TABLE IF NOT EXISTS `liefert_mit` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Hersteller_ID` int(11) DEFAULT NULL,
  `Lieferant_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Hersteller_ID` (`Hersteller_ID`),
  KEY `Lieferant_ID` (`Lieferant_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `liefert_mit`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Mitarbeiter`
--

CREATE TABLE IF NOT EXISTS `Mitarbeiter` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Vorname` varchar(20) DEFAULT NULL,
  `Nachname` varchar(20) DEFAULT NULL,
  `Geschlecht` tinyint(1) DEFAULT NULL,
  `GebDat` date DEFAULT NULL,
  `Ort_PLZ` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Ort_PLZ` (`Ort_PLZ`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Mitarbeiter`
--

INSERT INTO `Mitarbeiter` (`id`, `Vorname`, `Nachname`, `Geschlecht`, `GebDat`, `Ort_PLZ`) VALUES
(1, 'Alfons', 'Neumeier', 1, '1964-11-13', 84088),
(2, 'Brigitte', 'Neumeier', 0, '1965-02-05', 84088),
(3, 'Kerstin', 'Neumeier', 0, '1989-09-03', 84088),
(4, 'Nicole', 'Neumeier', 0, '1992-12-28', 84088);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Ort`
--

CREATE TABLE IF NOT EXISTS `Ort` (
  `plz` int(11) NOT NULL DEFAULT '0',
  `Name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`plz`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Ort`
--

INSERT INTO `Ort` (`plz`, `Name`) VALUES
(84088, 'Neufahrn'),
(84095, 'Furth');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `stellt_her_getraenk`
--

CREATE TABLE IF NOT EXISTS `stellt_her_getraenk` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Hersteller_ID` int(11) DEFAULT NULL,
  `Getraenke_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Hersteller_ID` (`Hersteller_ID`),
  KEY `Getraenke_ID` (`Getraenke_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `stellt_her_getraenk`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `stellt_her_typ`
--

CREATE TABLE IF NOT EXISTS `stellt_her_typ` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Hersteller_ID` int(11) DEFAULT NULL,
  `Getreanketyp_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Hersteller_ID` (`Hersteller_ID`),
  KEY `Getreanketyp_ID` (`Getreanketyp_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `stellt_her_typ`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Verpackung`
--

CREATE TABLE IF NOT EXISTS `Verpackung` (
  `id` int(11) NOT NULL DEFAULT '0',
  `groesse` double DEFAULT NULL,
  `material` varchar(20) DEFAULT NULL,
  `pfand` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Verpackung`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Werbegeschenk`
--

CREATE TABLE IF NOT EXISTS `Werbegeschenk` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Bezeichnung` varchar(20) DEFAULT NULL,
  `Wert` double DEFAULT NULL,
  `Lagerbestand` int(11) DEFAULT NULL,
  `Hersteller_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Hersteller_ID` (`Hersteller_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `Werbegeschenk`
--


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `wohnt_in`
--

CREATE TABLE IF NOT EXISTS `wohnt_in` (
  `id` int(11) NOT NULL DEFAULT '0',
  `Ort_PLZ` int(11) DEFAULT NULL,
  `Kunde_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Ort_PLZ` (`Ort_PLZ`),
  KEY `Kunde_ID` (`Kunde_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `wohnt_in`
--


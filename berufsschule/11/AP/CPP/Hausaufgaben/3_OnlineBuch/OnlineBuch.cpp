#include "OnlineBuch.h"
#include "Buch.h"
#include "Kapitel.h"

OnlineBuch::OnlineBuch()
{
	anzahlAutoren = 0;
	anzahlKapitel = 0;
}
OnlineBuch::~OnlineBuch()
{
}

int OnlineBuch::getAnzahlAutoren()
{
	return anzahlAutoren;
}
void OnlineBuch::setAnzahlAutoren(int zahl)
{
	anzahlAutoren = zahl;
}
int OnlineBuch::getAnzahlKapitel()
{
	return anzahlKapitel;
}
void OnlineBuch::setAnzahlKapitel(int zahl)
{
	anzahlKapitel = zahl;
}

#ifndef DATUM
#define DATUM

#include <string>
using std::string;

class Datum
{
public:
	Datum();
	~Datum();
	bool equals(Datum d);
	string getDatum();
private:
	int tag;
	int monat;
	int jahr;
};
#endif

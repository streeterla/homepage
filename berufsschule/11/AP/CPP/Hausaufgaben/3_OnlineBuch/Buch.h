#ifndef BUCH
#define BUCH

class Buch
{
	public:
		Buch();
		~Buch();
		char* getTitel();
		void setTitel(char* name);
		int getJahr();
		void setJahr(int jahr);
	private:
		char* titel;
		int erscheinungsjahr;
};
#endif

#include<iostream>
using namespace std;

int main() {
	string s;
	int count[26]={0};
	cin>>s;
	for(int i=0;s[i]!=NULL;i++){
		count[s[i]-'a']++;
	}
	int ans=0;char ch;
	for(int i=0;i<26;i++){
		if(count[i]>ans){
			ans=count[i];
			ch = i;
			}
	}
	cout<<ch;
}
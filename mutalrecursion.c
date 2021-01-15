//protótipos
int F(int n);
int M(int n);
//funções
int F(int n) {
  if(n == 0)//condição de parada
    return 1;
  return n - M(F(n-1));
}

int M(int n) {
  if(n == 0)//condição de parada
    return 0;
  return n - F(M(n-1));
}

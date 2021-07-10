// https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/
public class matrixSpiralTaverse {

    static void print(int [][] arr) {

        int i = 0;
        int j = 0;

        while (true) {
            int[][] ar2 = {{1, 2, 3, 4},
                       {5, 6, 7, 8},
                       {9, 10, 11, 12},
                       {13, 14, 15, 16}};

            // if J goes out of bound, bring back to previous index
            if(j == arr[i].length) {
                j--;
                if(arr[i][j]==0) {
                    i++;
                }
            }

            // if I goes out of bound, bring back to previous index
            if(i == arr.length) {
                i--;
                if(arr[i][j]==0) {
                    j++;
                }
            }
            
            // Inner loop to print row from left to right
            while (j < arr[i].length) {
                System.out.println(arr[i][j] + " ");
                arr[i][j] = 0;
                j++;
            }

            // inner loop to print row from right to left
            while(j > -1) {
                System.out.println(arr[i][j] + " ");
                arr[i][j] = 0;
                j--;
            }

            // outer loop to print column top to bottom
            if(j == arr[i].length - 1 ) {
                // increment if current element is 0
                if(arr[i][j] == 0) {
                    i++;
                }
                System.out.println(arr[i][j] + " ");
                arr[i][j] = 0;
                i++;
            }

            // outer loop to print column bottom to top
            if(j == 0 && arr[i][j] != 0) {
                System.out.println(arr[i][j] + " ");
                arr[i][j] = 0;
                i--;
            }

        }
    }

    public static void main(String[] args) {

        int[][] arr = {{1, 2, 3, 4},
                       {5, 6, 7, 8},
                       {9, 10, 11, 12},
                       {13, 14, 15, 16}};
        
        print(arr);
    }
}

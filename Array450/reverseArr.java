import java.util.Arrays;

class ReverseArr {

    static int[] reverse(int[] arr) {
        int i = 0;
        int j = arr.length-1;

        while(i<j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++; j--;
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {1,0,1,0};
        int[] reverse = ReverseArr.reverse(arr);
        System.out.println(Arrays.toString(reverse));
    }
}
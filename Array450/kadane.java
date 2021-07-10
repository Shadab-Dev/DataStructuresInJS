// https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1
public class kadane {
    
    static int findSubArray(int[] arr) {
        int currSum = 0;
        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {
            currSum = currSum + arr[i];

            if(currSum > maxSum) {
                maxSum = currSum;
            }

            if(currSum < 0) {
                currSum = 0;
            }

        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {1,2,3,-10};
        int maxSum = kadane.findSubArray(arr);
        System.out.println(maxSum);
    }
}

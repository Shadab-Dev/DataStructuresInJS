public class palindromicString {

    static String findPalindromicSubstring(String str) {
        int low, high;
        int length = 0;
        int start = 0;
        boolean flag = false;
        // int start = end = 0;

        for (int i = 0; i < str.length(); i++) {
            low = i;
            high = i +1;

            while(low > -1 && high < str.length() && str.charAt(low) == str.charAt(high)) {
                flag = true;
                if(high - low > length) {
                    start = low;
                    length = high - low;
                }                
                low--;
                high++;
            }

            low = i-1;
            high = i+1;
            while(low > -1 && high < str.length() && str.charAt(low) == str.charAt(high)) {
                flag = true;
                if(high - low > length) {
                    start = low;
                    length = high - low;
                }                
                low--;
                high++;
            }
        }

        if(!flag) {
            return "";
        } else {
            return str.substring(start, length + start + 1);
        }
    }

    public static void main(String[] args) {
        String str = "aabbdbbaa";
        String substr = findPalindromicSubstring(str);
        if(substr.isEmpty()) {
            System.out.println("No palindrome string found!!");
        } else {
            System.out.println(substr);
        }
    }
    
}

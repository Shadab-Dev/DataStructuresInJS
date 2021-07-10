public class countAndSay {

    static void count(int n) {
        String str = "1";
        int counter = 1;
        System.out.println(str);

        if(n <= 1) {
            return;
        }

        for (int i = 2; i <= n; i++) {
            String temp = "";
            for (int j = 0; j < str.length(); j++) {
                if((j + 1 < str.length()) && str.charAt(j) == str.charAt(j + 1)) {
                    counter++;
                } else {
                    temp = temp + counter + str.charAt(j);
                    counter = 1;
                }
            }
            System.out.println(temp);
            str = temp;
        }

    }

    public static void main(String[] args) {
        count(10);
    }
    
}

## Maximum Nesting Depth of the Parentheses
[LeetCode #1614](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/)

A string is a **valid parentheses string** (denoted **VPS**) if it meets one of the following:

- It is an empty string `""`, or a single character not equal to `"("` or `")"`,
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are **VPS**'s, or
- It can be written as `(A)`, where `A` is a **VPS**.

We can similarly define the **nesting depth** `depth(S)` of any VPS `S` as follows:

- `depth("") = 0`
- `depth(C) = 0`, where `C` is a string with a single character not equal to `"(" `or `")"`.
- `depth(A + B) = max(depth(A), depth(B))`, where `A` and `B` are **VPS**'s.
- `depth("(" + A + ")") = 1 + depth(A)`, where `A` is a **VPS**.

For example, `""`, `"()()"`, and `"()(()())"` are **VPS**'s (with nesting depths 0, 1, and 2), and `")("`and `"(()"` are not **VPS**'s.

Given a **VPS** represented as string `s`, return the **nesting depth** of `s`.

## Solution in C++

```cpp
/**
 * Runtime: 0 ms, faster than 100.00%
 * Memory Usage: 6.5 MB, less than 22.49% 
 */
class Solution {
  public:
    int maxDepth(string s) {
      int max = 0;
      int cnt = 0;

      for(int i=0; i<s.size(); ++i)
      {
        if (s[i] == '(') 
        {
          ++cnt;
        }
        else if (s[i] == ')')
        {
          --cnt;
        }

        if (cnt > max) 
          max = cnt;
      }

      return max;
    }
};
```
<h2>
  <picture>
  <img alt="[4 kyu]" src="https://github.com/rudy-rojas/codewars-challenges/blob/main/images/kyu/4.svg?raw=true" width="50" />
  </picture> Challenge: Explosive Sum
</h2>

### Description:
#### How many ways can you make the sum of a number?
From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)

> In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

```javascript
4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
```

### Example:
#### Basic
```javascript
sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42
```

#### Explosive
```javascript
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
```

See [here](http://www.numericana.com/data/partition.htm) for more examples.
<br /><br />

<details>
  <summary>URL's</summary>
    <ol>
      <li>
        <a href="https://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript">Problem statement</a>
      </li>
      <li>
        <a href="https://www.codewars.com/kata/52ec24228a515e620b0005ef/solutions/javascript">Other Solutions</a>
      </li>
    </ol>
</details>
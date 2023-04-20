### 常用命令


查询历史版本记录（先执行）
```
kubectl rollout history deploy lanqiao-fe
```

回滚到上一个版本
```
kubectl -n syl-product rollout undo deploy lanqiao-fe
```

回滚到指定版本
```
kubectl rollout undo deploy lanqiao-fe --to-reversion={版本号}
```
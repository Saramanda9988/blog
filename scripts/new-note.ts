import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

// 获取当前日期时间
const now = new Date()
const year = now.getFullYear()
const month = String(now.getMonth() + 1).padStart(2, '0')
const day = String(now.getDate()).padStart(2, '0')
const hour = String(now.getHours()).padStart(2, '0')
const minute = String(now.getMinutes()).padStart(2, '0')
const second = String(now.getSeconds()).padStart(2, '0')

// 格式化文件名和日期
const fileName = `${year}-${month}-${day}-${hour}${minute}.md`
const isoDate = now.toISOString()

// 从命令行获取内容
const content = process.argv.slice(2).join(' ') || '今天天气不错'

// 创建文件内容
const fileContent = `---
date: ${isoDate}
lang: zh
---

${content}`

// 文件路径
const filePath = join(process.cwd(), 'src', 'content', 'notes', fileName)

try {
  writeFileSync(filePath, fileContent, 'utf-8')
  console.log(`✅ 小记已创建: ${fileName}`)
  console.log(`📝 内容: ${content}`)
  console.log(`📅 时间: ${year}-${month}-${day} ${hour}:${minute}:${second}`)
} catch (error) {
  console.error('❌ 创建小记失败:', error)
  process.exit(1)
}

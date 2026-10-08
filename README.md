# Northline

منصة طلبات صغيرة لتجربة Project Atlas. فيها كود TypeScript، Docker، Compose، Kubernetes، Terraform، وGitHub Actions. العلاقات مكتوبة بشكل صريح عشان الخريطة تقدر تثبتها من الملفات.

افتح المجلد ده في Atlas، أو استورده:

`https://github.com/Hesham-73/northline-platform`

## إيه اللي المفروض يظهر

- حزم `northline-api` و`northline-worker` و`northline-web`، واستيراد الملفات المحلية، ومسارات Express `GET /health` و`GET /lanes/:lane/quote` و`POST /orders`.
- كل Dockerfile مربوط بصورة الأساس ومراحل البناء.
- Compose يربط الخدمات بـ `depends_on` والشبكات والحجوم، ويشارك نفس أسماء الصور مع CI وKubernetes.
- GitHub Actions: `test` ثم `build-api` و`build-worker`، ثم `build-web` بعد `build-api`. كل بناء يحدد سياق الـ Docker والملف والوسم.
- Kubernetes في namespace `northline`: الـ Service يختار الـ Deployment أو StatefulSet المطابق، والـ Ingress يوجه إلى `api` و`web`، والـ API يستخدم ConfigMap وSecret وPVC.
- Terraform: الشبكة الفرعية وقاعدة البيانات تشيران إلى VPC ومجموعة الشبكات داخل `infra/main.tf`.

## فجوات متعمدة عشان المراجعة

- `billing-preview` Service اختار label `component=billing` ومفيش Pod مطابق. Atlas المفروض يبلّغ إن الـ selector غير محلول، وميرسمش علاقة اختيار.
- استدعاء الواجهة لـ `/lanes/:lane/quote` مش مربوط آليًا بمسار الـ API. Atlas مش بيستنتج عناوين التشغيل.
- مورد `Namespace` ظاهر كنوع Kubernetes لسه غير مدعوم.
- دلو `aws_s3_bucket.archive` مالوش علاقة بباقي موارد Terraform.

الصور `ghcr.io/hesham-73/northline-*:1.4.0` مرجع مشترك في الملفات، ومش إثبات إن بناء اتنفذ أو إن نسخة شغّالة في كلاستر. قيمة `DATABASE_URL` في المانيفست مثال محلي، ومش سر إنتاج.

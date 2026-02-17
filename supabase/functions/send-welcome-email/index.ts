import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email, name } = await req.json();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "K-ARC <onboarding@resend.dev>",
        to: [email],
        subject: name
          ? `${name}님, K-ARC 가입이 승인되었습니다!`
          : "K-ARC 가입이 승인되었습니다!",
        html: `
          <div style="font-family: 'Apple SD Gothic Neo', sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="color: #1e293b; font-size: 24px; margin: 0;">K-ARC</h1>
              <p style="color: #64748b; font-size: 14px; margin-top: 4px;">Korean Autism Research Consortium</p>
            </div>
            <div style="background: #f8fafc; border-radius: 12px; padding: 32px; border: 1px solid #e2e8f0;">
              <h2 style="color: #1e293b; font-size: 20px; margin: 0 0 16px;">
                ${name ? `${name}님, 환영합니다! 🎉` : "환영합니다! 🎉"}
              </h2>
              <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
                K-ARC 가입 신청이 승인되었습니다.<br/>
                이제 대시보드에 접속하여 연구 데이터를 확인하실 수 있습니다.
              </p>
              <a href="https://joonan30.github.io/karc/dashboard"
                 style="display: inline-block; background: #4f46e5; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600;">
                대시보드 바로가기
              </a>
            </div>
            <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 32px;">
              본 메일은 K-ARC 시스템에서 자동 발송되었습니다.
            </p>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

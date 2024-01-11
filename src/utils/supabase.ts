import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function handleGoogleSignin() {
  const temp = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

export async function handleSignOut() {
  await supabase.auth.signOut();
}

export async function getSession() {
  let temp = null;
  await supabase.auth.getSession().then(({ data: { session } }) => {
    temp = session;
  });
  return temp;
}

export async function createScore() {
  const session: any = await getSession();
  if (session) {
    const userId = session.user.id;
    const { data: existingRecords, error } = await supabase
      .from("dataProject")
      .select("*")
      .eq("user_id", userId);
    if (error && error!.code !== "PGRST116") {
      console.error("Error checking for existing record:", error);
      return;
    }

    if (existingRecords?.length === 0) {
      const temp = {
        user_id: userId,
        name: session.user.user_metadata.name,
        user_avatar: session.user.user_metadata.avatar_url,
        played: 0,
        numWins: 0,
      };
      await supabase.from("dataProject").insert(temp).select("*");
    }
  }
}

export async function updateScore(played: number, numWins: number) {
  const session: any = await getSession();
  if (session) {
    const data = {
      played: played,
      numWins: numWins,
    };
    await supabase
      .from("dataProject")
      .update(data)
      .eq("user_id", session.user.id);
  }
}

export async function getAllScore() {
  const result = await supabase.from("dataProject").select("*");
  return result.data;
}

export async function getScoreByUserid() {
  const session: any = await getSession();
  if (session) {
    const { data: result, error } = await supabase
      .from("dataProject")
      .select("*")
      .eq("user_id", session.user.id);
    if (error) {
      console.error("Error checking for existing record:", error);
      return null;
    }
    return result;
  }
  return null;
}
